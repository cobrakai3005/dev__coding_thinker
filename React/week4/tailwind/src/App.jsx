import React from "react";

export default function App() {
  return (
    <div>
      <header className="w-full p-3 bg-zinc-200 ">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <div className="loogo">Logo</div>
          <ul className=" flex items-center gap-5">
            {["Home", "About", "Contact", "Login"].map((el) => (
              <li className="hover:bg-amber-400 px-5 py2">
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="flex gap-5 justify-center items-center hs text bg-gradient-to-br from-cyan-300 to-violet-500">
        <div className="w-1/2 bg">
          <h2 className="text-7xl text-cyan-600">Main Banner </h2>
        </div>
        <img
          className="w-[300px]"
          src="https://images.unsplash.com/photo-1750263160585-241fa75dca79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </main>
    </div>
  );
}
