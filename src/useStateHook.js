import { useState } from "react";
export const UseStateHook = () => {
  let [showText, setShowText] = useState(true);
  const Togglebutton = () =>{
    setShowText(!showText)
  };
  return (
    <div>
      <button onClick={Togglebutton}>show / hide</button>
      {showText &&<h1 >text example</h1>}
    </div>
  );
};
