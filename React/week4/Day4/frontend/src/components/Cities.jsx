import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import CityItem from "./CityItem";

export default function Cities() {
  const [cities, setCites] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);

  const getCities = async () => {
    setLoad(true);
    await new Promise((res, rej) => setTimeout(res, 1200));
    try {
      const data = await axios.get("http://localhost:3000/cities", {
        params: {
          _page: page,
          _limit: 6,
        },
      });
      //   axios({
      //     method: "post",
      //     url: "http://localhost:3000/cities",
      //     data: {
      //       name: "Himanshu",
      //       population: 27,
      //       id: 3456789,
      //       country: "india",
      //     },
      //   });
      setCites(data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoad(false);
    }
  };
  useEffect(() => {
    getCities();
  }, [page]);

  if (load) {
    return <Loading />;
  }
  return (
    <div className="w-full min-h-screen max-w-[1360px] mx-auto flex flex-col gap-10">
      <h3 className="text-8xl font-semibold text-center">Cities</h3>

      <div className="flex items-center gap-6">
        <button
          onClick={() => setPage(page - 1)}
          className="p-3 bg-white/40 rounded-md cursor-pointer"
        >
          Prev
        </button>
        <div>{page}</div>
        <button
          onClick={() => setPage(page + 1)}
          className="p-3 bg-white/40 rounded-md cursor-pointer"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-zinc-100 xl:grid-cols-4 gap-8">
        {cities?.map((city) => (
          <CityItem key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}
