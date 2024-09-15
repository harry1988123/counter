import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0); // Counter initialized to 0
  const [isRunning, setIsRunning] = useState(false); // To track if counter is running

  useEffect(() => {
    let interval = null;

    // If counter is running, set an interval to increment the counter every second
    if (isRunning) {
      interval = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);
    } else if (!isRunning && counter !== 0) {
      clearInterval(interval); // Clear interval if counter is paused
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount or when the counter stops
  }, [isRunning, counter]);

  const handleStartPause = () => {
    setIsRunning(!isRunning); // Toggle between start and pause
  };

  const handleReset = () => {
    setCounter(0); // Reset counter to 0
    setIsRunning(false); // Stop the counter
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{counter}</h1>
      <button onClick={handleStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
