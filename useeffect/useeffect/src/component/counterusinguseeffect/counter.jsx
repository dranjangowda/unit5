import React from 'react';
import { useState } from 'react';
const Counter = () => {
    const [count,setCount]=useState(0)
  return <div>
        <h3>counter:{count}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }}>add one</button>
  </div>;
};

export default Counter;
