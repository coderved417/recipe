import React,{useRef,useState} from "react";
import Navbar from '../components/Navbar'

const ExpenseTracker = () => {
  const[clicked,setClicked]=useState(false);
  let snoRef = useRef();
  let priceRef = useRef();
  let placeRef = useRef();
  const [array, setArray] = useState([
    {
      id: 1,
      Place: "Lucknow",
      Price: 5000,
    },
    {
      id: 2,
      Place: "Food",
      Price: 3000,
    },
    {
      id: 3,
      Place: "Petrol",
      Price: 10000,
    },
    {
      id: 4,
      Place: "Club",
      Price: 30000,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: snoRef.current.value,
      Place: placeRef.current.value,
      Price: priceRef.current.value,
    };
    console.log(obj);
    if(obj.id && obj.Price && obj.name){
      setArray([...array,obj]);
    }else{
      alert('All fields requireds')
    }
  }

  const handleDelete=(ans,index) => {
  //   console.log(ans,index);
  //   let copyarray=[...arr]
  //   copyarray.splice(index,1)
  //  console.log(copyarray);
  //  setArray(copyarray);

  let filterdArr= array.filter((ele)=>ele.id!==ans.id)
  console.log(filterdArr);
  setArray(filterdArr)
  
       
  }
  return (
    <>
      <h4 className="text-center">Expense Tracker</h4>
      {/* {array.map((item) => {
        return (
          <>
            <p>{item.Place}</p>
            <p>{item.Price}</p>
          </>
        );
      })} */}
       <div className="text-center">

      <button onClick={()=>setClicked(true)} className='btn btn-info my-2'>Add Expense</button>
       </div>
      {clicked && <form
        style={{ width: "max-content" }}
        action=""
        className="d-flex gap-2 bg-dark my-4 p-3 mx-auto "
      >
        <button onClick={()=>setClicked(false)} type="button" class="btn-close bg-white closeBtn" aria-label="close"></button>
        <input type="number" placeholder="S.no" ref={snoRef} />
        <input type="text" placeholder="Enter the Place" ref={placeRef} />
        <input type="text" placeholder="Enter the Price" ref={priceRef} />
        <button onClick={handleSubmit} className="btn btn-primary">
          Add expense
        </button>
      </form>}
      <table className="table table-dark w-75 text-center mx-auto">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Place</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {array.map((item,i) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.Place}</td>
                <td>{item.Price}</td>
                <td>
                  <button onClick={()=>handleDelete(item,i)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTracker;
