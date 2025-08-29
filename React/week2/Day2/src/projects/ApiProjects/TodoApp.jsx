import  { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchGetTodo = async () => {
    try {
      setError(false);
      setLoading(true);
      setTodos([]);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await res.json();
      console.log(todos);

      if (Array.isArray(todos)) {
        setTodos(todos);
      } else {
        setTodos([]);
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col justify-start items-center p-3">
      <h1 className="text-4xl text-white font-bold   p-4">
        Welcome to my Todo App
      </h1>
      <button
        className="px-4 py-2 cursor-pointer font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600  transition-all duration-150 text-white rounded-2xl"
        onClick={fetchGetTodo}
      >
        Get Todos
      </button>

      {error && (
        <p className="text-2xl font-bold text-red-600  p-4">
          Somthing went wrong in Fetching{" "}
        </p>
      )}

      {loading && (
        <>
          <div className="w-[300px] h-[300px] rounded-full animate-spin border-t-4 border-zinc-100"></div>
          {/* <h1 className="text-[88px] text-zinc-700/70">Loading</h1> */}
        </>
      )}
      {todos && todos.length === 0 ? (
        "Your todos will appear below"
      ) : (
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
      )}
    </div>
  );
}
