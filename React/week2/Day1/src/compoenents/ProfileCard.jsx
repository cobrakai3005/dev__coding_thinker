import React from "react";

export default function ProfileCard() {
  return (
    <div className="w-[66%] border-[1px] p-4 border-zinc-700/50 mx-auto  flex flex-col-reverse md:flex-row justify-center items-center gap-[30px] md:gap-0 rounded-lg h-auto">
      <div className="flex-1  flex flex-col items-start gap-2">
        <h2 className="text-3xl font-bold text-zinc-800">Love Porwal</h2>
        <p className="text-zinc-500">Full Stack Developer</p>
        <button className="px-5 py-2 font-bold cursor-pointer bg-black text-white hover:scale-105 rounded-md">
          Follow
        </button>

        <div className="mt-4 flex gap-3 flex-wrap">
          {[
            "Reactjs",
            "Nodejs",
            "Javascript",
            "SQL",
            "Python",
            "Mongodb",
            "React hooks",
            "React Native",
          ].map((el) => (
            <span
              key={el}
              className="border-[1px] border-zinc-800/40 px-4  py-[4px] rounded-[100px]"
            >
              {el}
            </span>
          ))}
        </div>
      </div>

      <div className="w-[170px] h-[170px] md:w-[100px] md:h-[100px]  cursor-pointer bg-black/60 rounded-full"></div>
    </div>
  );
}
