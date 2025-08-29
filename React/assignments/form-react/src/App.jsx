import { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Form from "./components/Form";
import { records } from "./data";
import Recursive from "./components/Recursive";

export default function App() {
  const [employees, setEmployees] = useState(records);

  return (
    <>
      <div className="min-h-screen  text-zinc-100 bg-gradient-to-tr items-center from-blue-700 via-cyan-700 to-violet-600 grid grid-cols-[470px_1fr]">
        <Form addEmployee={setEmployees} />
        <EmployeeTable setEmployees={setEmployees} employees={employees} />
      </div>

      {/* <Recursive /> */}
    </>
  );
}
