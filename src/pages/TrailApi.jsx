import React, { useState } from 'react'


const TrailApi = () => {

    const[items,setitems]=useState([]);
    console.log(items);

    const getData=async ()=>{
        let res=await fetch('https://dummyjson.com/products');
        let data =await res.json()
        console.log(data.products);
        setitems(data.products)
        
    }
    
  return (
    <div>
      <h1>This is trail pages</h1>
      <button >Click me </button>
    </div>
  )
}

export default TrailApi
