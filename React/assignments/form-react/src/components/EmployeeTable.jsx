import React, { useState, useMemo } from "react";
import Employee from "./Employee";

export default function EmployeeTable({ employees, setEmployees }) {
  const [salarySorted, setSalarySorted] = useState(false);
  const [department, setDepartment] = useState("");

  const handleSelect = (e) => {
    setDepartment(e.target.value);
  };

  const filteredAndSortedEmployees = useMemo(() => {
    let list = [...employees];
    // Filter by department if selected
    if (department) {
      list = list.filter((emp) => emp.department.toLowerCase() === department);
    }
    // Sort by salary if needed
    if (salarySorted) {
      list.sort((a, b) => a.salary - b.salary);
    }

    return list;
  }, [employees, salarySorted, department]);

  return (
    <div className="p-10 w-full min-h-screen flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Our Employees</h1>

        {employees.length !== 0 && (
          <div className="flex items-center gap-5">
            <button
              className={`bg-white/10 px-5 py-2 rounded ${
                salarySorted && "bg-white/30"
              }`}
              onClick={() => setSalarySorted(!salarySorted)}
            >
              Salary
            </button>
            <select
              onChange={handleSelect}
              value={department}
              className="bg-violet-600 border-none px-3 py-2 rounded"
            >
              <option value="">Choose</option>
              <option value="it">IT</option>
              <option value="hr">HR</option>
              <option value="logistics">Logistics</option>
              <option value="trainer">Trainer</option>
            </select>
          </div>
        )}
      </div>

      {employees.length === 0 && (
        <div className="w-full h-[70vh] bg-white/20 rounded-4xl flex flex-col gap-6 justify-center items-center">
          <h1 className="text-xl">Please Add Employees Below</h1>
          <h1 className="text-4xl">All Employees will be displayed</h1>
          <h1 className="text-4xl">here in Tabular Form</h1>
        </div>
      )}

      <table
        style={{
          borderRadius: "10px",
        }}
        className="border-[1px] rounded overflow-hidden border-zinc-200 bg-white/20 w-full"
      >
        {filteredAndSortedEmployees.length > 0 && (
          <thead className="w-full text-lg">
            <tr>
              <th className="p-3 text-center">First Name</th>
              <th className="p-3 text-center">Last Name</th>
              <th className="text-end">Department</th>
              <th className="text-end">Status</th>
              <th className="text-end">Salary</th>
              <th className="text-end pr-5">Actions</th>
            </tr>
          </thead>
        )}

        <tbody className="text-white text-normal">
          {filteredAndSortedEmployees.map((em) => (
            <Employee key={em.id} setEmployees={setEmployees} employee={em} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
