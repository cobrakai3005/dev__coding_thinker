import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    console.log("Hello From useEffect");
    const interval = setInterval(() => {
      console.log("time", time);
      setTime((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          setLoad(false);
          return 100;
        }
        return prev + 20;
      });
    }, 120);

    const cleanup = () => {
      clearInterval(interval);
      console.log("Hello From Cleanup Function");
    };

    return cleanup;
  }, []);

  if (load) {
    return (
      <div className=" flex flex-col justify-center items-center text-white">
        {load && (
          <div className="absolute top-[30%] w-[300px]  h-[300px] -translate-x-1/2 border-white/40 border-t-[10px] rounded-full left-[50%] animate-spin"></div>
        )}

        <h1 className="text-4xl">Website is loading in</h1>
        <h1 className="text-[88px]">{time} seconds</h1>
      </div>
    );
  } else {
    return (
      <h1 className="text-[55px] font-bold text-zinc-700">
        Welcome to my website
      </h1>
    );
  }
}
