import React from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  return (
    <div className="todo-app p-20 w-full min-h-screen border flex flex-col gap-5 justify-start items-center">
      <h1 className="text-center text-4xl text-zinc-600 font-bold">
        Add your Todos
      </h1>
      <AddTodo text={text} setText={setText} setTodos={setTodos} />
      <TodoItems todos={todos} setTodos={setTodos} />
    </div>
  );
}
