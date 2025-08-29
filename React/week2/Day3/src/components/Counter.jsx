import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handelClk = (value) => {
    setCount(count + value);
  };
  console.log("start");
  //Mount Phase /Creation
  //without dependency array (call everuy time when rendering happend)
  //with dependency array (call only 1 time duringg mount phase)
  useEffect(() => {
    console.log("mid -1");
    document.title = `count ${count}`;
    console.log("mid -2");
  });
  console.log("end");
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => handelClk(1)}>Add</button>
      <button onClick={() => handelClk(-1)}>Redu</button>
    </div>
  );
}
