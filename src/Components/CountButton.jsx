function CountButton({ count, setCount, increaseAmount }) {
  function increaseCount() {
    setCount(count + increaseAmount);
  }

  return <button onClick={increaseCount}>Increase by {increaseAmount}</button>;
}

export default CountButton;
