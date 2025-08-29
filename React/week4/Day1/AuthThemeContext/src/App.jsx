import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./context/ThemeContextProvider";
import Main from "./Components/Main";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "light" ? "bg-zinc-200 " : "bg-zinc-800 text-white"
      } w-full min-h-screen flex flex-col gap-10`}
    >
      <Navbar />
      <Main />
    </div>
  );
}
