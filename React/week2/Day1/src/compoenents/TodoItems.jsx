import React, { useState } from "react";
import { CiTrash } from "react-icons/ci";
export default function TodoItems({ todos, setTodos }) {
  const handleDelete = (id) => {
    setTodos((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };
  return (
    <div className="w-full flex flex-col gap-8">
      {todos.length !== 0 && (
        <h1 className="text-center text-2xl text-emerald-600 font-bold">
          Todos
        </h1>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos &&
          todos.map((todo) => (
            <li
              className="flex justify-between items-center rounded-md font-semibold px-5 text-zinc-600 py-3 bg-zinc-200 w-[370px] "
              key={todo.id}
            >
              {todo.text}

              <div className="flex gap-4 text-xs items-center">
                <select
                  className=""
                  id=""
                  // style={{
                  //   fontSize: "14px",
                  // }}
                  defaultValue={todo.status}
                  onChange={(e) => {
                    setTodos(() => {
                      return todos.map((el) => {
                        if (el.id === todo.id)
                          return {
                            ...el,
                            status: e.target.value,
                          };
                        else return el;
                      });
                    });
                  }}
                >
                  <option value="">Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </select>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-zinc-700 text-white p-2 rounded-lg cursor-pointer"
                >
                  <CiTrash size={24} />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
