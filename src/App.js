import React, { useState } from 'react';
import './App.css'

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div id="wrapper">
      <div className="main">
        <div style={{ backgroundColor: count % 10 === 0 && count !== 0  ? 'SaddleBrown' :
                                       count % 2 === 0 && count !== 0 ? 'Tomato' :
                                       count !== 0 ? 'SteelBlue' : 'SeaGreen'}} className="circle">
          <div className="nums">
            <p>{count}</p>
          </div>
        </div>
      </div>
      <div id="buttonHolder">
        <button onClick={() => setCount(count + 1)}>Increase Me Gently!</button>
        <button onClick={() => setCount(0)}>Default Me Gently!</button>
        <button onClick={count > 0 ? () => setCount(count - 1) : () => setCount(0)}>Decrease Me Gently!</button>
      </div>
    </div>
  );
}

export default Counter;
