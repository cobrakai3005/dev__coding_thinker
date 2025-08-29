import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Account from "./pages/Account";
import AccountPage from "./pages/AccountPage";
import NotFound from "./pages/NotFound";
import Protect from "./pages/Protect";

export default function App() {
  return (
    <div
      // style={{
      //   background: "linear-gradient()",
      // }}
      className="w-full min-h-screen bg-cyan-100"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account"
          element={
            <Protect>
              <Account />
            </Protect>
          }
        />
        <Route
          path="/account/:id"
          element={
            <Protect>
              <AccountPage />
            </Protect>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
