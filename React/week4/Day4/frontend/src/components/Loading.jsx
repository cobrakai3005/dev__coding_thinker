import React from "react";

export default function Loading() {
  return (
    <div className="w-full min-h-screen max-w-[1360px] mx-auto flex flex-col gap-10">
      <h3 className="text-8xl font-semibold text-center">Cities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-zinc-100 xl:grid-cols-4 gap-8">
        {new Array(16).fill(0).map((el, id) => (
          <div
            key={id}
            className=" p-4 flex flex-col gap-4 rounded hover:scale-105 transition-all duration-500 animate-pulse"
          >
            <div className="p-2 bg-white/40 rounded-md"></div>
            <div className="p-4 bg-white/40 rounded-md"></div>
            <div className="p-6 bg-white/40 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
