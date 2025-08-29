import React from "react";

export default function CityItem({ city }) {
  return (
    <div className="bg-white/30 p-4  rounded hover:scale-105 transition-all duration-500">
      <h3 className="text-md tracking-wide">
        Name:{" "}
        <span className="text-xl text-zinc-100 font-bold tracking-widest">
          {city.name}
        </span>
      </h3>
      <h3 className="text-md tracking-wide">
        Country:{" "}
        <span className="text-md text-zinc-100 font-bold">{city.country}</span>
      </h3>
      <h3 className="text-md tracking-wide">
        Population:{" "}
        <span className="text-md text-zinc-100 font-bold">
          {city.population}
        </span>
      </h3>
    </div>
  );
}
