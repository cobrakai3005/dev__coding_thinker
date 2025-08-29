import React from "react";

export default function TodoItem({ todos }) {
  console.log(todos);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
      {todos?.map((todo, index) => (
        <div
          key={todo.id}
          className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
          style={{
            animationDelay: `${index * 0.05}s`,
            animation: "fadeInUp 0.5s ease-out forwards",
          }}
        >
          <h4>id: {todo.id}</h4>
          <h2 className="font-semibold">Title:{todo.title}</h2>
          <h4>Status: {todo.completed ? "Completed" : "Not Compelted"}</h4>
        </div>
      ))}
    </div>
  );
}
