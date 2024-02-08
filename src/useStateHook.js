import { useState } from "react";
export const UseStateHook = () => {
  let [age, setAge] = useState(0);
  const incraeaseAge = () => {
    age++;
    setAge(age);
    console.log(age);
  };
  return (
    <div>
      <h1>{age}</h1>
      <button onClick={()=> setAge(age+1)}>add</button>
      <button onClick={()=> setAge(age-1)}>kam</button>
    </div>
  );
};
