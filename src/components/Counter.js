import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  const arttır = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    if (count !== 1) {
    setCount(count - 1);
    }
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={arttır}>+</button>
      <button onClick={azalt}>-</button>
    </div>
  );
};

export default Counter;