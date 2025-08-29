import { IoIosAdd } from "react-icons/io";
export default function AddTodo({ text, setText, setTodos }) {
  const handleSubmit = () => {
    if (text === "") return;

    setTodos((prev) => {
      const todo = {
        id: Date.now(),
        text,
        status: "pending",
      };
      return [...prev, todo];
    });

    setText("");
  };
  return (
    <div className="w-full flex   gap-5 justify-center items-center">
      <input
        type="text"
        className="border-[1px] w-[370px]  outline-0 focus:border-[1px] focus:border-emerald-400/50 rounded-4xl border-zinc-600/40 px-4 py-3"
        placeholder="Add Todo Here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="px-4 py-2 cursor-pointer bg-emerald-500 text-white rounded-4xl"
        onClick={handleSubmit}
      >
        <IoIosAdd size={25} className="font-bold text-white" />
      </button>
    </div>
  );
}
