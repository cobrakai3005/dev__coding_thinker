import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const { id } = useParams();

  const getData = () => {
    return fetch(`https://reqres.in/api/users/${id}`, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((res) => res.json());
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      await new Promise((resolve, reject) => setTimeout(resolve, 1200));
      const data = await getData();
      setUser(data.data);
    } catch (error) {
      setErr(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl p-4 mx-auto flex flex-col gap-2 justify-center items-center w-full">
        <div className="p-3 rounded w-full animate-pulse bg-zinc-400 flex flex-col gap-2"></div>
        <div className="p-8 rounded w-full animate-pulse bg-zinc-400 flex flex-col gap-2"></div>
        <div className="p-12 rounded w-full animate-pulse bg-zinc-400 flex flex-col gap-2"></div>
        {/* <div className="w-[300px] h-[300px] border-t-2 border-cyan-700 rounded-full"></div> */}
      </div>
    );
  }
  if (err) {
    return (
      <div className="flex justify-center items-center w-full">
        Somthing Went Wrong
      </div>
    );
  }
  if (user) {
    return (
      <div className="max-w-5xl px-4 p-4 mx-auto flex flex-col gap-2 justify-center items-center w-full">
        <div
          key={user.id}
          className="p-5 w-full  max-w-3xl shadow-md flex gap-5 items-center bg-white  cursor-pointer rounded-md  transition-all duration-500"
        >
          <img className="w-[80px] " src={user.avatar} />
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-teal-700">{`${user.first_name}  ${user.last_name}`}</h3>
            <h3 className="text-[17px] text-teal-600 hover:underline">{`${user.email}`}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              illum, repudiandae harum voluptates optio modi amet fugit nobis,
              deleniti odio tempora architecto nihil provident impedit quia
              obcaecati quae iusto a.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
