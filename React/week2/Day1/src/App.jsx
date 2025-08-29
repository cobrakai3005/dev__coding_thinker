import React from "react";
import Greet from "./compoenents/Greet";
import "./App.css";
import List from "./compoenents/List";
import Counter from "./compoenents/Counter";
import Todo from "./compoenents/Todo";
import ProfileCard from "./compoenents/ProfileCard";
import CricketScore from "./compoenents/CricketScore";

export default function App() {
  const arr = ["hello", "world", "react", "javascript"];

  const list = arr.map((el) => <List el={el.toUpperCase()} />);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-5">
      {/* <h2 className="cont">Hello World through css</h2> */}
      {/* <Greet /> */}
      {/* <div className="lists">
        <ul>{list}</ul>
        <ol>{list}</ol>
      </div> */}

      {/* <Counter /> */}

      <Todo />

      {/* <ProfileCard /> */}
      {/* <CricketScore /> */}
    </div>
  );
}
