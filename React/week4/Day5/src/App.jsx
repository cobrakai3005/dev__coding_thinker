import React from "react";

export default function App() {
  return (
    <div className="bg-red-300 grid grid-cols-[300px_1fr]  grid-rows-[300px_1fr] h-screen">
      <div className="w-full  max-w-6xl mx-auto  p-2 flex justify-between items-center  col-span-2">
        <h2 className="text-3xl font-bold text-amber-500">Logo</h2>
        <div className="flex justify-center items-center gap-6">
          <a href="">Home </a>
          <a href="">Aboyt </a>
          <a href="">Contact </a>
          <a href="">Login </a>
        </div>
      </div>

      <div>
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, enim?
        Ipsum, sint voluptas dicta debitis molestias harum sit enim
        reprehenderit maxime ex. Quia qui doloremque aliquam, dolorum corrupti
        harum magni!
      </div>
      <div>
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, enim?
        Ipsum, sint voluptas dicta debitis molestias harum sit enim
        reprehenderit maxime ex. Quia qui doloremque aliquam, dolorum corrupti
        harum magni!
      </div>
    </div>
  );
}
