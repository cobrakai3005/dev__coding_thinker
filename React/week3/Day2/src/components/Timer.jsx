import React, { useRef, useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(3670);
  let handleID = useRef(null);

  //
  const getvalue = (val) => {
    return val < 10 ? `0${val}` : val;
  };
  //   const timeInMS = 3670  --> 01:01:10
  const displayTime = (timeInSec) => {
    const sec = timeInSec % 60;
    const min = Math.floor(timeInSec / 60) % 60;
    const hr = Math.floor(timeInSec / 3600);

    return `${getvalue(hr)}:${getvalue(min)}:${getvalue(sec)}`;
  };

  //
  useEffect(() => {
    return handleStop;
  }, []);

  const handleStart = () => {
    if (handleID.current != null) {
      return;
    }
    handleID.current = setInterval(() => {
      console.log("hello from timer function");
      setTime((val) => {
        if (val == 0) {
          clearInterval(handleID.current);
          return 0;
        }
        return val - 1;
      });

      console.log("timer id is: ", handleID.current);
    }, 1000);
  };

  const handleStop = () => {
    console.log("handle stop function called");
    console.log("timer id is: ", handleID.current);

    clearInterval(handleID.current);
    handleID.current = null;
  };
  const handleReset = () => {
    // console.log("handle reset timer called");
    // console.log("timer id is: ", handleID.current);

    // clearInterval(handleID.current);
    // handleID.current = null;
    handleStop();
    setTime(3670);
  };
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-3xl mb-6">{displayTime(time)}</h2>
        <div className="flex justify-center items-center gap-12">
          <button
            onClick={handleStart}
            className="px-7 py-2 bg-gradient-to-r from-violet-700 to-cyan-500 rounded-2xl text-xl"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="px-7 py-2 bg-gradient-to-r from-violet-700 to-cyan-500 rounded-2xl text-xl"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="px-7 py-2 bg-gradient-to-r from-violet-700 to-cyan-500 rounded-2xl text-xl"
          >
            Reset
          </button>
        </div>
        {<h1 className="text-[300px] font-bold ">{displayTime(time)}</h1>}
      </div>
    </>
  );
}
