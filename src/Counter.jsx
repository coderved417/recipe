import React, { useState } from 'react'

const Counter = () => {
    const[x,setx]=useState(10);
    console.log(x);
    
    const handleIncrement=()=>{
        setx(x+1)
    }
    const handleDecrement=()=>{
      setx(x-1)
    }
  return (
    <div>
        <h1>This is my Counter pages</h1>
      <p>value:{x}</p>
     <br /> 
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

export default Counter
