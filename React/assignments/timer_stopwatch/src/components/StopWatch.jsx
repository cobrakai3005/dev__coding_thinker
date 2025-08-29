import React, { useEffect, useRef, useState } from "react";
import { formatTime } from "../utils";
import { FaPlay, FaPause } from "react-icons/fa";
import { RiResetLeftFill } from "react-icons/ri";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const intevalId = useRef();

  const startTime = () => {
    console.log("Start Time");
    if (!intevalId.current) {
      // const startTime = Date.now() - time;
      // const startTime = time;

      // 121
      intevalId.current = setInterval(() => {
        setTime((prev) => {
          // console.log(startTime, Date.now());
          // return Date.now() - startTime; // 123-121 --> 3
          //
          return prev + 10;
        });
      }, 10);
    }
  };

  const pauseTime = () => {
    console.log("Pause Time");
    clearInterval(intevalId.current);
    intevalId.current = null;
  };

  const resetTime = () => {
    console.log("Reset Time");
    pauseTime();
    setTime(0);
  };

  useEffect(() => {
    return pauseTime;
  }, []);

  return (
    <>
      <h1 className="text-cyan-700  text-4xl font-semibold ">Stop Watch</h1>
      <div className="text-white bg-white/40 w-full  max-w-3xl flex flex-col items-center justify-center p-4 gap-7 rounded-lg">
        <h1 className="text-zinc-700 text-6xl">{formatTime(time)}</h1>

        <div className="flex gap-6 items-center justify-center">
          <button
            onClick={startTime}
            className="px-5 py-3 text-center   bg-zinc-700/70 cursor-pointer rounded-4xl text-xl hover:bg-zinc-700/30"
          >
            <FaPlay />
          </button>
          <button
            onClick={pauseTime}
            disabled={!intevalId.current}
            className="px-5 py-3 disabled:bg-zinc-700/30 bg-zinc-700/70 cursor-pointer rounded-4xl text-xl hover:bg-zinc-700/30"
          >
            <FaPause />
          </button>
          <button
            onClick={resetTime}
            disabled={!intevalId.current}
            className="px-5 py-3 disabled:bg-zinc-700/30 bg-zinc-700/70 cursor-pointer rounded-4xl text-xl hover:bg-zinc-700/30"
          >
            <RiResetLeftFill />
          </button>
        </div>
      </div>
    </>
  );
}
