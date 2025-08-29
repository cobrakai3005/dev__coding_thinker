import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //[curr state, updater function ]
  //Hook is simple function
  //useState is state management hook that has two i=kind of work also reflect on ui
  return (
    <div
      style={{
        width: "100%",
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "teal",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Count {count}
      </h1>
      <div className="count-btn-divs">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button disabled={count < 1} onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}
