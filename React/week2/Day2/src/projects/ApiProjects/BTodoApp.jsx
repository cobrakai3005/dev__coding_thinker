import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  Circle,
  List,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

export default function BTodoApp() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
              <List className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Todo Universe
            </h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover and explore todos from across the digital cosmos
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-12">
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            onClick={fetchGetTodo}
            disabled={loading}
          >
            <div className="flex items-center gap-3">
              <RefreshCw
                className={`w-5 h-5 ${loading ? "animate-spin" : ""}`}
              />
              {loading ? "Loading Todos..." : "Fetch Todos"}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 text-center">
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <p className="text-red-300 font-semibold text-lg">
                Something went wrong while fetching todos
              </p>
              <p className="text-red-400/80 text-sm mt-2">
                Please try again or check your connection
              </p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-white/20 rounded-full"></div>
              <div className="absolute top-0 left-0 w-24 h-24 border-4 border-t-blue-400 border-r-purple-400 border-b-pink-400 border-l-transparent rounded-full animate-spin"></div>
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Loading Todos
              </h2>
              <div className="flex gap-1 justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && todos.length === 0 && !error && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <List className="w-12 h-12 text-white/60" />
            </div>
            <h2 className="text-2xl font-semibold text-white/80 mb-2">
              No Todos Yet
            </h2>
            <p className="text-white/60">
              Click the button above to fetch and explore todos
            </p>
          </div>
        )}

        {/* Todos Grid */}
        {todos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {todos.map((todo, index) => (
              <div
                key={todo.id}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: "fadeInUp 0.5s ease-out forwards",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {todo.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    ) : (
                      <Circle className="w-6 h-6 text-white/40" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-white/60 bg-white/10 px-2 py-1 rounded-lg">
                        #{todo.id}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                          todo.completed
                            ? "bg-green-500/20 text-green-300"
                            : "bg-orange-500/20 text-orange-300"
                        }`}
                      >
                        {todo.completed ? "Completed" : "Pending"}
                      </span>
                    </div>

                    <h3
                      className={`font-semibold text-white leading-snug ${
                        todo.completed ? "line-through text-white/60" : ""
                      }`}
                    >
                      {todo.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
