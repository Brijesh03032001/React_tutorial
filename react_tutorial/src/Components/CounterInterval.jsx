import React, { useState, useRef } from 'react';

function CounterInterval() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startCounter = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const pauseCounter = () => {
    clearInterval(intervalRef.current);
  };

  const stopCounter = () => {
    clearInterval(intervalRef.current);
    setCount(0);
  };

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={startCounter}>Start</button>
      <button onClick={pauseCounter}>Pause</button>
      <button onClick={stopCounter}>Reset</button>
    </>
  );
}

export default CounterInterval;
