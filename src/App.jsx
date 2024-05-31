import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Counter from "./Components/Counter";
import WarningText from "./Components/WarningText";
import CounterClass from "./Components/Counter_Class";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CounterClass increaseAmounts={[1, 2, 5, 10]} maxCount={30} />
        <WarningText>
          Edit <code>src/App.jsx</code> and save to test HMR
        </WarningText>
      </div>
      <WarningText className="read-the-docs">
        Click on the Vite and React logos to learn more
      </WarningText>
    </>
  );
}

export default App;
