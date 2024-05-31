function CountButton({ onClick, increaseAmount }) {
  function handleClick() {
    onClick(increaseAmount);
  }

  return <button onClick={handleClick}>Increase by {increaseAmount}</button>;
}

export default CountButton;
