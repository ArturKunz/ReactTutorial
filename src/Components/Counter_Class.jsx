import { Component } from "react";
import CountButton from "./CountButton";
import WarningText from "./WarningText";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount(increaseAmount) {
    this.setState((prevState) => ({
      count: prevState.count + increaseAmount,
    }));
  }

  render() {
    const { increaseAmounts, maxCount = 100 } = this.props;
    const { count } = this.state;
    const countText = `The visitor count is ${count}`;

    if (count >= maxCount) return <p>{countText}</p>;

    const over80Prozent = count >= maxCount * 0.8;
    return (
      <>
        <p>{countText}</p>
        {over80Prozent && <WarningText>Achtung über 80% voll!</WarningText>}
        {increaseAmounts.map((increaseAmount, index) => (
          <CountButton
            key={index}
            onClick={() => this.handleCount(increaseAmount)}
            increaseAmount={increaseAmount}
          />
        ))}
      </>
    );
  }
}

export default CounterClass;
