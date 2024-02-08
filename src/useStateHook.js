import { useState } from "react";
export const UseStateHook = () => {
  let [inputvalue , setInputValue] = useState("")
  const handelInputChange = (event) =>{
    console.log(event.target.value)
    setInputValue(event.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handelInputChange}/>
      <h1>{inputvalue}</h1> 
    </div>
  );
};
