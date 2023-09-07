import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const Increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const Decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
    console.log(counter);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={Increment}>Increment</button>
      <br />
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}

export default App;
