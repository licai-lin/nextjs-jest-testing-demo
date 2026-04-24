import React, { useState } from "react";

function CounterJs({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div>
      {/* data-testid is a custom attribute used by tests to reliably select this element. */}
      <h1>Count:</h1>
      <h3 data-testid="my-count">{count}</h3>
      <div>
        <button onClick={increase}> Increase</button>
        <button onClick={decrease}> Decrease</button>
        <button onClick={reset}> Reset</button>
        <button onClick={switchSigns}> Switch Signs</button>
      </div>
    </div>
  );
}

export default CounterJs;
