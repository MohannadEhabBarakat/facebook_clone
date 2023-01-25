"use client";
import React, { ReactElement, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  AiTwotoneVideoCamera,
  AiFillCamera,
  AiOutlineSmile,
} from "react-icons/ai";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

async function updateDB({ inputRef, session, imageToPost }: any) {
  console.log("updateDB");
  const docRef = await addDoc(collection(db, "posts"), {
    massage: inputRef.current.value,
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image,
    timestamp: serverTimestamp(),
  });

  if (imageToPost) {
    const storageRef = ref(storage, `posts/${docRef.id}`);
    const uploadTask = uploadString(storageRef, imageToPost, "data_url").then(
      (snapshot) => {
        // when done get the download url
        getDownloadURL(snapshot.ref).then((url) => {
          updateDoc(docRef, {
            postImage: url,
          });
        });
      }
    );
  }
  console.log("updateDB2");

  inputRef.current.value = "";
}

function InputBox(): ReactElement {
  const { data: session, status } = useSession();
  const inputRef = useRef(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [imageToPost, setImageToPost] = useState<string | ArrayBuffer | null>(null);

  const sendPost = (e: any) => {
    console.log("sendPost");

    e.preventDefault();
    updateDB({ inputRef, session, imageToPost });
    removeImage();
    console.log("sendPost2");
  };

  const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("addImageToPost");
    const reader = new FileReader();

    if (e?.target?.files?.[0]) {
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (readerEvent) => {
        if (readerEvent.target?.result)
          setImageToPost(readerEvent.target.result);
      };
    }
    console.log("addImageToPost2");
  };

  console.log("imageToPost");
  console.log(imageToPost);

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div
      className="mt-5 w-10/12 sm:w-8/12 p-4 block mx-auto items-center rounded-2xl
                         text-gray-500 shadow-md bg-white"
    >
      <div className="flex flex-row w-full items-center">
        {session?.user?.image && <Image
          src={session?.user?.image}
          width={30}
          height={30}
          alt="profile"
          className="rounded-full w-8 h-8"
        />}
        <form className="w-full">
          <input
            className="w-full rounded-full bg-gray-100 p-2 placeholder-gray-500 ml-2 outline-none"
            type="text"
            placeholder={"What's on your mind " + session?.user?.name + "?"}
            ref={inputRef}
          ></input>
          <button
            className="hidden"
            type="submit"
            onClick={(e) => {
              sendPost(e);
            }}
          ></button>
        </form>
        {imageToPost && (
          <div
            onClick={() => removeImage()}
            className="flex flex-col cursor-pointer
                        filter hover:brightness-110 transition duration-150 transform hover:scale-105 m-4"
          >
            {typeof imageToPost === 'string' && <img
              src={imageToPost}
              alt="ImageToPost"
              className="h-10 object-contain"
            />}
            <p className=" text-xs text-center text-red-500">remove</p>
          </div>
        )}
      </div>
      <hr className="w-full mt-4" />
      <div className="flex flex-col lg:flex-row w-full justify-between lg:pl-10 mt-2">
        <div className="p-2 rounded-xl flex flex-row flex-grow items-center justify-center cursor-pointer hover:bg-gray-100">
          <AiTwotoneVideoCamera className=" text-red-500" />
          <p className="text-xs ml-2 sm:text-sm xl:text-base">Live video</p>
        </div>
        <div
          onClick={() => imageRef?.current?.click()}
          className="p-2 rounded-xl flex flex-row flex-grow items-center justify-center cursor-pointer hover:bg-gray-100"
        >
          <AiFillCamera className=" text-green-700" />
          <p className="text-xs ml-2 sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={imageRef}
            type="file"
            hidden
            onChange={(e) => {
              addImageToPost(e);
            }}
          />
        </div>
        <div className="p-2 rounded-xl flex flex-row flex-grow items-center justify-center cursor-pointer hover:bg-gray-100">
          <AiOutlineSmile className=" text-yellow-300" />
          <p className="text-xs ml-2 sm:text-sm xl:text-base">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
}
export default InputBox;
