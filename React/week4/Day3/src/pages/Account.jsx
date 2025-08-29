import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Account() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const getData = () => {
    return fetch("https://reqres.in/api/users", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((res) => res.json());
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      const data = await getData();
      setUsers(data.data);
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
      <div className="w-full max-w-7xl mx-auto p-6 grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <div key={el.id} className="p-4 flex flex-col gap-2">
            <div className="p-3 bg-cyan-950/40 animate-pulse rounded"></div>
            <div className="p-4 bg-cyan-950/40 animate-pulse rounded"></div>
            <div className="p-9 bg-cyan-950/40 animate-pulse rounded"></div>
          </div>
        ))}
        {/* <div className="w-[300px] h-[300px] border-t-2 border-cyan-700 rounded-full"></div> */}
      </div>
    );
  }
  if (err) {
    return (
      <div className="flex justify-center items-center w-full text-4xl mt-10">
        Somthing Went Wrong
      </div>
    );
  }
  if (users) {
    return (
      <div className=" flex flex-col gap-10 justify-center items-center bg-cyan-100">
        <h1 className="text-xl md:text-6xl pt-4 text-cyan-950 font-bold text-center">
          Account Page
        </h1>

        <div className="w-full max-w-7xl p-6 grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <Link
              to={`/account/${user.id}`}
              key={user.id}
              className="p-5 w-full shadow-md flex gap-2 md:gap-5 items-center bg-white  cursor-pointer rounded-md hover:scale-110 transition-all duration-500"
            >
              <img className="w-[80px] " src={user.avatar} />
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold text-teal-700">{`${user.first_name}  ${user.last_name}`}</h3>
                <h3 className="text-[12px] md:text-[17px] text-teal-600 hover:underline">{`${user.email}`}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
