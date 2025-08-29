import React, { useState } from "react";
import Timer from "./components/Timer";
import Video from "./components/Video";

export default function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div className="flex flex-col gap-4 justify-center bg-gradient-to-br via-cyan-500 to-blue-400 items-center w-full h-screen">
      {/* {showTimer && <Timer />}
      <button
        className="px-4 py-2 bg-emerald-950 text-white rounded-md font-bold"
        onClick={() => setShowTimer(!showTimer)}
      >
        {!showTimer ? "Show Timer" : "Hide Timer"}
      </button> */}

      <Video />
    </div>
  );
}
