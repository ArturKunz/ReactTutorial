import { useState } from "react";

function CountButton() {
  const [count, setCount] = useState(0);

  const increaseAmount = 2;

  function increaseCount() {
    setCount(count + increaseAmount);
  }

  return <button onClick={increaseCount}>The count is {count}</button>;
}

export default CountButton;
