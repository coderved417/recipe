import React, { useEffect,useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Recipe = () => {
  let searchRef=useRef()


    const[recipes,setrecipes]=useState([]);
    console.log(recipes);

    const[searchItem,setsearchItem]=useState("pizza")
    console.log(recipes);
    
    

    const getAllrecipes=async()=>{
    let res=await fetch('https://api.edamam.com/search?q=biriyani&app_id=8673549e&app_key=0855b03ba85f1b947c6e32ef334d4fe9')

    let data= await res.json()
    setrecipes(data.hits);
    console.log(data)
    
    }
    
    useEffect(()=>{
        getAllrecipes()
        

    },[searchItem])

    const handlesearch=(e)=>{
      e.preventDefault()

      let value= searchRef.current.value;
      console.log(value);
      searchItem(value)
      
    }
  return (
    <div>
      <form className="d-flex w-50 m-auto my-3 border border-danger" role="search">
        <input ref={searchRef} className='form-control me-2' type="search" aria-label='Search' placeholder='Search' aria-label="Search" type="text" />

        <button onClick={handlesearch} className="btn btn-outline-success" type="submit"> Search</button>
      </form>

      <div className='row m-0 p-0 justify-content-content-center gap-3 container m-auto bg-warning mt-2'> 

     
      


{recipes.map((ele,i)=>{
    
  
  return <div key={i} className='card'  style={{width: '18rem'}}>
          <img src={ele.recipe.image} className="card-img-top" alt="..." />
         <div className="card-body">
         <h5 className="card-title">{ele.recipe.label}</h5>
         {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

           
           <Link to="/view" state={ele} className="btn btn-primary">view recipe</Link>

           <button onClick={(console.log(ele))}>click me</button>
       </div>

  </div>


 
})}
          
 </div>
 </div>
  )
}

export default Recipe
