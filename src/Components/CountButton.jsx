function CountButton({ count, setCount, increaseAmount }) {
  function increaseCount() {
    setCount(count + increaseAmount);
  }

  return <button onClick={increaseCount}>The count is {count}</button>;
}

export default CountButton;
