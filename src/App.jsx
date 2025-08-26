import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(4);

  function addValue() {
    setCounter(counter + 1);
  }

  function removeValue() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>A simple React State-Management app</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value (+)</button>{" "}
      <button onClick={removeValue}>Remove value (-)</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
