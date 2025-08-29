import { useRef, useState } from "react";

export default function Class() {
  const ButtonWithRef = () => {
    const countRef = useRef(0);
    console.log(countRef);

    const handleRefClick = () => {
      countRef.current = countRef.current + 1;
      console.log(countRef.current);
    };

    return (
      <>
        <h1>{countRef.current}</h1>
        <button onClick={handleRefClick}>INC</button>
      </>
    );
  };

  const ButtonWithState = () => {
    const [count, setCount] = useState(0);

    const handleStateClick = () => {
      setCount(count + 1);
      console.log(count);
    };

    return (
      <>
        <h1>{count}</h1>
        <button onClick={handleStateClick}>INC</button>
      </>
    );
  };

  return (
    <div className="App">
      <ButtonWithRef />
      <ButtonWithState />
    </div>
  );
}
