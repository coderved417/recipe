import React, { useState } from 'react'

const ConditionalRendri = () => {
    const[x,setx]=useState(false);
    const handleClick=()=>{
        setx(!x)
    }
  return (
    <div>
        
      {/* <h1>This is text one</h1>
      <h1>This is text two</h1><br /> */}

      <button onClick={handleClick}>Click me</button><br /><br />
     { x && <form action="" className="" style={{backgroundColor:"green"}}>
      <fieldset>
      <label htmlFor="a">name</label>
      <input type="text" /><br />
      <label htmlFor="a">class</label>
      <input type="text" /><br />
      <label htmlFor="a">sub</label>
      <input type="text" /><br />
      <label htmlFor="a">Mark</label>
      <input type="text" /><br />
      <label htmlFor="a">Address</label>
      <input type="text" />
      </fieldset>
      </form>}
     
    </div>
  )
}

export default ConditionalRendri
