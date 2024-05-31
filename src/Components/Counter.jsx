import { useState } from "react";
import CountButton from "./CountButton";

function Counter({ increaseAmounts, maxCount = 100 }) {
  const [count, setCount] = useState(0);
  const countText = `The visitor count is ${count}`;

  function handleCount(increaseAmount) {
    setCount(count + increaseAmount);
  }

  if (count >= maxCount) return <p>{countText}</p>;

  return (
    <>
      <p>{countText}</p>
      {count >= maxCount * 0.8 && <p>Achtung über 80% voll!</p>}
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
