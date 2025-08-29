import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function Navbar() {
  const { auth, login, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full ${
        theme === "light" ? "bg-zinc-200" : "bg-zinc-700 text-white"
      } shadow-md`}
    >
      <div className="max-w-7xl p-5 mx-auto flex justify-between items-center px-10">
        <div className="logo text-3xl font-bold">Company</div>

        <ul className="flex gap-5 items-center">
          {auth && "Hello User"}
          {auth ? (
            <button
              className="border-[1px] border-zinc-600 px-4 py-1 rounded cursor-pointer"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-gradient-to-br from-violet-600 to-cyan-700 text-white rounded px-3 py-1 cursor-pointer"
              onClick={login}
            >
              Login{" "}
            </button>
          )}
          <button
            className="bg-gradient-to-br from-violet-600 to-cyan-700 text-white rounded px-3 py-1 cursor-pointer"
            onClick={toggleTheme}
          >
            Toggle{" "}
          </button>
        </ul>
      </div>
    </div>
  );
}
