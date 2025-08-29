import React, { useState } from "react";

export default function CricketScore() {
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  return (
    <div className="w-[50%] h-[40vh] p-3">
      <div className="w-full h-[300px] flex flex-col justify-center items-center p-4 bg-black text-white">
        <h1 className="text-3xl">Cricket Score Board</h1>
        <p className="text-lg">Balls: {balls}</p>
        <p className="text-lg">Runs: {runs}</p>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center p-5 ">
        <p>
          You Get total 6 Balls (1 over) The button get disabbled after that
        </p>
        <div className="flex gap-4">
          <button
            disabled={balls === 6}
            onClick={() => {
              setBalls(balls + 1);
              const runs = Math.floor(Math.random() * 6) + 1;
              setRuns((prev) => prev + runs);
            }}
            className="bg-zinc-400 cursor-pointer px-3 py-1 rounded disabled:bg-zinc-200"
          >
            Click to hit the ball
          </button>
          <button className="bg-zinc-400 px-3 py-1 cursor-pointer rounded">
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}
