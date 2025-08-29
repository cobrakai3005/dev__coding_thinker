import React, { useState } from "react";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";
import { FaCheck } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

export default function App() {
  const [stopwatch, setStopwatch] = useState(true);
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
        // background: "linear-gradient(135deg, #00c6ff, #0072ff)",
        // background: "linear-gradient(135deg, #f7971e, #ffd200)",
        // background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        // background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        // background: "linear-gradient(135deg, #00ff87, #60efff)",
        // background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
      }}
      className="w-full min-h-screen bg-gradient-to-br from-lime-400 via-green-500 to-cyan-700 flex flex-col gap-6 justify-center items-center"
    >
      <button
        className="flex cursor-pointer items-center gap-4 text-xl"
        onClick={() => setStopwatch(!stopwatch)}
      >
        {" "}
        <span
          className={`px-4 py-2 flex gap-4 items-center   rounded-4xl text-white ${
            !stopwatch && "bg-zinc-400/40"
          }`}
        >
          {stopwatch ? <FaHistory /> : <FaCheck />}
          Timer
        </span>{" "}
        /{" "}
        <span
          className={`px-4 py-2 flex gap-4 items-center  rounded-4xl text-white ${
            stopwatch && "bg-zinc-400/40"
          }`}
        >
          {stopwatch ? <FaCheck /> : <FaHistory />}
          Stopwatch
        </span>
      </button>
      {stopwatch ? <StopWatch /> : <Timer />}
    </div>
  );
}
