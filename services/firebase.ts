import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";


 
export function getPosts(): Array<any> {

  const [realtimePosts, loading, error] = useCollection(
      query(collection(db, "posts"), orderBy("timestamp", "desc"))
    )
  return [realtimePosts, loading, error]
}

