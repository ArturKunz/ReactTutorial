import { useState } from "react";
import CountButton from "./CountButton";

function Counter({ increaseAmounts }) {
  const [count, setCount] = useState(0);
  const countText = `The visitor count is ${count}`;

  function handleCount(increaseAmount) {
    setCount(count + increaseAmount);
  }

  if (count >= 100) return <p>{countText}</p>;

  return (
    <>
      <p>{countText}</p>
      {<p>Achtung über 80% voll!</p> && count === 80}
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
