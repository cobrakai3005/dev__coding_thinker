import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Account from "./pages/Account";
import AccountPage from "./pages/AccountPage";

export default function App() {
  return (
    <div
      // style={{
      //   background: "linear-gradient()",
      // }}
      className="w-full min-h-screen"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/:id" element={<AccountPage />} />
      </Routes>
    </div>
  );
}
