import { useState } from "react";

function Counter() {

  const [array,setArray]=useState([])


  return (
    <div>
      <h1>
        Counter <span>{array.toString()}</span>
      </h1>

      <div>
        <button
         onClick={()=>{
          setArray((prevArray)=>[... prevArray , "+1"])
         }}
        >
          Increment
        </button>
        <button
         onClick={()=>{
          setArray((prevArray)=>[...prevArray, "-1"])
         }}
         
        >
          Decrement
        </button>
       
      </div>
    </div>
  );
}
export default Counter;
