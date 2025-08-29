import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const fetchPosts = async () => {
    try {
      setError(false);
      setLoading(true);
      setPosts([]);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=6&_page=${page}`
      );
      const posts = await res.json();
      setPosts(posts);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePage = (value) => {
    const newPage = page + value;
    setPage(newPage);
  };
  useEffect(() => {
    fetchPosts();
  }, [page]);
  return (
    <div className="max-w-7xl mx-auto w-full p-4 flex flex-col items-center gap-7 text-white">
      <h1 className="text-4xl text-center text-white">
        Welcome to my application
      </h1>
      <h1 className="text-4xl text-center text-zinc-100 animate-pulse">
        All Posts
      </h1>

      {error && <p className="text-white text-[88px]">404 Page Not Found</p>}
      <div className="flex gap-10">
        <button
          onClick={() => handlePage(-1)}
          className="bg-white/40 p-2 rounded disabled:bg-white/10 cursor-pointer"
          disabled={page === 1}
        >
          <FaArrowLeft />
        </button>
        <p className="text-xl">{page}</p>
        <button
          className="bg-white/40 p-2 rounded disabled:bg-white/10 cursor-pointer"
          onClick={() => handlePage(1)}
        >
          <FaArrowRight />
        </button>
      </div>

      {loading && (
        <div className="w-[300px] h-[300px] rounded-full animate-spin border-t-4 border-zinc-100"></div>
      )}
      <div className="w-full grid gap-7  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts &&
          posts?.map((post) => (
            <div className="p-6 cursor-pointer shadow-lg  rounded-md bg-zinc-100/20  flex flex-col gap-4  hover:scale-105 transition-all duration-200">
              <h2 className="text-2xl uppercase font-bold text-zinc-100">
                {post.title}
              </h2>
              <p className="text-zinc-200 text-md ">{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
