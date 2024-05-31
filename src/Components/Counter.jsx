import { useState } from "react";
import CountButton from "./CountButton";

function Counter({ increaseAmounts }) {
  const [count, setCount] = useState(0);
  function handleCount(increaseAmount) {
    setCount(count + increaseAmount);
  }
  console.log(increaseAmounts);
  return (
    <>
      <p>The count is {count}</p>
      {increaseAmounts.map((increaseAmount, index) => {
        return (
          <CountButton
            key={index}
            onClick={handleCount}
            increaseAmount={increaseAmount}
          />
        );
      })}
    </>
  );
}

export default Counter;
