import React, { useEffect, useState } from 'react'



const EffectShow = () => {

    let [clicked,setClicked]=useState(false)
    console.log(clicked);

    useEffect(()=>{
        console.log("out of use effect");
        
    },[])
  

    
  return (
    <div>
      <h1>This is Effect show page</h1>

      <br />
      <button onClick={(()=>setClicked(!clicked))}>click me</button>
    </div>
  )
}

export default EffectShow
