import { useState } from "react";
export const UseStateHook = () => {
  const[textcolor,setTextColor] = useState("red")
  return (
    <div>
      <button onClick={()=>{setTextColor(textcolor==="red" ?"green" :"red")}}>change color</button>
      <h1 style={{color:textcolor}}>text example</h1>
    </div>
  );
};
