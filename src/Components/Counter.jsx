import { useState } from "react";
import CountButton from "./CountButton";
import WarningText from "./WarningText";

function Counter({ increaseAmounts, maxCount = 100 }) {
  const [count, setCount] = useState(0);
  const countText = `The visitor count is ${count}`;

  function handleCount(increaseAmount) {
    setCount(count + increaseAmount);
  }

  if (count >= maxCount) return <p>{countText}</p>;

  const over80Prozent = count >= maxCount * 0.8;
  return (
    <>
      <p>{countText}</p>
      {over80Prozent && <WarningText>Achtung über 80% voll!</WarningText>}
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
