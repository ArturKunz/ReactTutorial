import { useState } from "react";
import CountButton from "./CountButton";

function Counter() {
  const [count, setCount] = useState(0);

  function handleCount(increaseAmount) {
    setCount(count + increaseAmount);
  }
  return (
    <>
      <p>The count is {count}</p>
      <CountButton onClick={handleCount} increaseAmount={1} />
      <CountButton onClick={handleCount} increaseAmount={2} />
      <CountButton onClick={handleCount} increaseAmount={5} />
      <CountButton onClick={handleCount} increaseAmount={10} />
    </>
  );
}

export default Counter;
