import { useState } from "react";
import React from "react";
import Timer from "./components/Timer";
import Class from "./components/Class";

export default function App() {
  const [showtimer, setShowtimer] = useState(false);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-violet-800 via-cyan-700 text-white font-bold flex justify-center items-center">
      {/* {showtimer &&  <Timer /> } */}

      {/* <Timer /> */}
      {/* <button onClick={()=>setShowtimer(!showtimer)}>{showtimer?"Hide Timer":"Show Timer"}</button> */}
      <Class />
    </div>
  );
}
