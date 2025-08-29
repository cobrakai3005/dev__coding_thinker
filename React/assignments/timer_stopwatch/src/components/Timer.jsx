import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { RiResetLeftFill } from "react-icons/ri";
import { formatTime, formatTimeFromSec } from "../utils";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [timeOver, setTimeOver] = useState(false);
  let intevalId = useRef(null);

  const handleStart = () => {
    if (!intevalId.current) {
      console.log("Start Time");

      intevalId.current = setInterval(() => {
        console.log("interval id", intevalId.current);
        setTime((prev) => {
          if (prev === 0) {
            setTimeOver(true);
            clearInterval(intevalId.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const pause = () => {
    console.log("pause Time");
    clearInterval(intevalId.current);
    intevalId.current = null;
  };
  const resetTime = () => {
    console.log("Reset Time");
    pause();
    setTimeOver(false);
    setTime(0);
  };

  return (
    <>
      <h1 className="text-cyan-700  text-4xl font-semibold  ">Timer</h1>
      <input
        type="number"
        placeholder="Enter time in seconds"
        className="outline-0 py-2 border-[1px] w-lg border-zinc-700/50  focus:border-[1px] focus:border-red-600/60 rounded-4xl px-5"
        onChange={(e) => setTime(e.target.value)}
      />

      <div className={`flex gap-6 items-center justify-center `}>
        <button
          onClick={() => setTime((prev) => prev + 5)}
          className="px-5 py-3 text-center   bg-zinc-500/50 cursor-pointer rounded-4xl text-xl hover:bg-zinc-700/30"
        >
          +5
        </button>
        <button
          onClick={() => setTime((prev) => prev + 30)}
          className="px-5 py-3 disabled:bg-zinc-700/30 bg-zinc-500/50  cursor-pointer rounded-4xl text-xl hover:bg-zinc-700/30"
        >
          +30
        </button>
        <button
          onClick={() => setTime((prev) => prev + 60)}
          className="px-5 py-3 disabled:bg-zinc-700/30 bg-zinc-500/50  cursor-pointer rounded-4xl text-xl hover:bg-zinc-700/30"
        >
          +60
        </button>
      </div>
      <div
        style={{
          backgroundColor: timeOver ? "red" : "",
        }}
        className={`text-white bg-white/40 ${
          timeOver && "bg-red-500/70 animate-bounce"
        } w-full  max-w-3xl flex flex-col items-center justify-center p-4 gap-7 rounded-lg text-2xl`}
      >
        <input type="number" placeholder="" />
        <h2 className="text-[100px]">{formatTimeFromSec(time)}</h2>

        <div className={`flex gap-6 items-center justify-center `}>
          <button
            onClick={handleStart}
            className="px-5 py-3 text-center   bg-zinc-700/70 cursor-pointer rounded-4xl text-xl hover:bg-zinc-700/30"
          >
            <FaPlay />
          </button>
          <button
            onClick={pause}
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

        {/* <button
          onClick={() => {
            pause();
            setTime(0);
          }}
          className="bg-yellow-700/40 px-4 py-2 rounded-4xl"
        >
          {" "}
          Clear
        </button> */}
      </div>
    </>
  );
}
