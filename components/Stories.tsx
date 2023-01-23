import React, { ReactElement } from "react";
import StoryCard from "./StoryCard";

function Stories(): ReactElement {
  const stories = [
    {
      name: "Noha Magdy",
      src: "https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/241800968_2512213328922085_7874113912570881251_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W9MDJdUzWewAX-J0GFI&_nc_ht=scontent.fcai19-6.fna&oh=00_AfB6_P8FRuUQX75HH6UNfMk2hP7kkSpNChP6_4LeEX6mRQ&oe=63C8D371",
      profile:
        "https://scontent.fcai19-6.fna.fbcdn.net/v/t1.6435-9/159521957_2348253638651389_8317824226829883503_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=Q2UpnJxQIJ0AX-dK5bc&_nc_ht=scontent.fcai19-6.fna&oh=00_AfBKESCZWaEBgqE8AlH1E0q5TEmE_0Wd-_V1UZvrdGmpig&oe=63EB886D",
    },
    {
      name: "Ibrahem el-kedwany",
      src: "https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/268986625_154271766945225_709565031694774137_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tPz1zrSnqpgAX_4WoiT&_nc_ht=scontent.fcai19-6.fna&oh=00_AfCUNJxibUP2KqXY8eMjCaZOVaTUZLqjaM61IZr00kY3cg&oe=63C86B37",
      profile:
        "https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/306052011_209367944768940_5116915325040705202_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YZOxgnwW-PoAX8HbblG&_nc_ht=scontent.fcai19-6.fna&oh=00_AfAzAp2V2fiM8QOr4I1_HWbx80Lp9Db9XIi73V_V-j4s2A&oe=63C84734",
    },
    {
      name: "Jeff Bazoz",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
    },
    {
      name: "Mark",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
  ];
  return (
    <div className="flex justify-center p-5 space-x-3 mx-auto overflow-x-scroll scrollbar-hide h-auto overflow-y-hidden">
      {stories.map((story, index) => {
        return (
          <StoryCard
            key={index}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        );
      })}
    </div>
  );
}
export default Stories;
