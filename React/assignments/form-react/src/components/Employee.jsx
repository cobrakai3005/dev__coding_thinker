import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Employee({ employee, setEmployees }) {
  const { id, profile, name, department, maritalStatus:status, salary } = employee;

  const handleDelete = (id) => {
    setEmployees((prev) => {
      return prev.filter((el) => el.id != id);
    });
  };
  return (
    <tr className="border-[1px] border-zinc-100/30">
      <td className="p-4 text-zinc-100 text-center flex gap-5 items-center justify-start">
        <img className="w-10 rounded-full" src={profile} alt="" />
        {name.split(" ")[0]}
      </td>
      <td className="text-end">{name.split(" ")[1]}</td>
      <td className="text-end">{department.toUpperCase()}</td>
      <td className="text-end">{status}</td>
      <td className="text-end">{salary}</td>
      <td className="text-end pr-10">
        <button
          onClick={() => handleDelete(id)}
          className="bg-red-400 p-2 rounded-2xl hover:scale-110"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
