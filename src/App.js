import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIson] = useState(false);


  /*
  Note :
  Use Effect run affect after every render 
  */ 
  useEffect(() => {
    document.title = `Youcliked ${count} times`
  })
  const incrementCount = () =>{
    setCount(previousCount => previousCount + 1);
    console.log(setCount)
  }

  const toggleLight = () => {
    setIson(bea => !bea);
  }
  return (
  <>
  <h2>Counter</h2>
  <button onClick={incrementCount}>I was Click {count}</button>


  <h2>Toggle Light</h2>
  <div
    style={{
      height: "50px",
      width: "50px",
      background: isOn ? "yellow" : "grey"
    }}
    onClick={toggleLight}>

    
  </div>
  </>
  );
}

export default App;
