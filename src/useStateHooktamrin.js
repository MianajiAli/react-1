import { useState } from "react";
export const UseStateHook = () => {
  let[number,setNumber] = useState(0)

  return (
    <div>
      <button onClick={()=>{setNumber(number+1)}}>add</button>
      <button onClick={()=>{setNumber(number-1)}}>kam</button>
      <button onClick={()=>{setNumber(number=0)}}>sefr</button>
    <h1>{number}</h1>
    </div>
  );
};
