import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function Protect({ children }) {
  const { auth } = useContext(AuthContext);
  if (!auth.user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
