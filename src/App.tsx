import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  function decreaseCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <section>
      <div className="counter">
        <button onClick={decreaseCount}>-</button>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
      </div>
      <button onClick={resetCount}>Reset</button>
    </section>
  );
}

export default App;
