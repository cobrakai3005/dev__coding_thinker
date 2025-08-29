import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { url: "/", title: "home" },
  { url: "/about", title: "about" },
  { url: "/contact", title: "contact" },
  { url: "/login", title: "login" },
  { url: "/account", title: "account" },
];
export default function Navbar() {
  const activeStyle = { background: "#8ecae6", color: "teal" };

  return (
    <div className="w-full bg-cyan-950 px-16 py-3 md:py-7 rounded-b-[200px] shadow-sm flex flex-col gap-10 items-center">
      <div>
        <NavLink to={"/"} className="text-8xl text-cyan-500">
          Logo
        </NavLink>
      </div>

      <ul className="flex justify-center gap-6 md:gap-20 items-center  flex-wrap text-cyan-400 font-semibold text-2xl">
        {navLinks.map(({ url, title }) => (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            key={title}
            to={url}
            className={"px-4 py-2 capitalize rounded"}
          >
            {title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
