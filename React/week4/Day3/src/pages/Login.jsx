import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function Login() {
  const { auth, login, logout, load } = useContext(AuthContext);

  return (
    <div className="h-[60vh] flex flex-col gap-5 mt-10 items-center bg-cyan-100">
      {!auth.user && (
        <h1 className="text-4xl text-cyan-950 font-bold">Login Page</h1>
      )}
      {auth.user && (
        <>
          <h4 className="text-xl flex items-center gap-2">
            Hello <span className="font-bold text-2xl">{auth.user}</span>{" "}
          </h4>
          <h4 className="text-xl flex items-center gap-2">
            Welcome to Our Page
          </h4>
        </>
      )}

      {!auth.user && (
        <button
          onClick={login}
          className="px-4 py-2 rounded-md hover:scale-105 cursor-pointer text-md font-semibold bg-cyan-900 text-white"
        >
          {load ? "Loading.." : "Login"}
        </button>
      )}
      {auth.user && (
        <button
          onClick={logout}
          className="px-4 py-2 rounded-md text-md hover:scale-105 cursor-pointer font-semibold bg-cyan-900/70 text-white"
        >
          {load ? "Loading.." : "Logout"}
        </button>
      )}
    </div>
  );
}
