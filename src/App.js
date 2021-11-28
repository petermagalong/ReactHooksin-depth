import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIson] = useState(false);
  const [mousePosition, setMousePosition]= useState({x: null, y:null});
  const [status, setStatus] = useState(navigator.onLine)
  /*
  Note :
  Use Effect run affect after every render 
  */ 
  useEffect(() => {
    document.title = `Youcliked ${count} times`;
    window.addEventListener('mousemove',handleMouseMove)

    return () => {
      window.removeEventListener('mousemove',handleMouseMove)
    }
  },
  [count]);

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }
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

  <h2>Mouse Position</h2>
  {JSON.stringify(mousePosition,null,2)}
  <br />
  </>
  );
}

export default App;
