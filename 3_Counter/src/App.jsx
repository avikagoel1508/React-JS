import { useState } from "react";
function App() {
  // let counter=0;
  let [counter, setCounter]=useState(0);
  const addvalue=()=>{
   
    if (counter<20) {
      counter=counter+1;
      setCounter(counter)
       console.log("Clicked", counter)
    }
    else{
      console.log("Can't update counter is >20")
    }
  }
  const removevalue=()=>{
    if (counter>0) {
       counter=counter-1;
    setCounter(counter)
    console.log("Clicked", counter)
    }
    else{
      console.log("Counter is less than 0 so can't update")
    }
   
  }
  return (
    
   <>
   <h1>Learning React</h1>
   <h2>Counter value={counter}</h2>
   <button
   onClick={addvalue}
   >Increase Value</button>
   <button
   onClick={removevalue}
   >Decrease Value</button>
   </>
  )
}

export default App
