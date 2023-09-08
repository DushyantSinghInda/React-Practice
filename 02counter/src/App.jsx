import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const Increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);  This is the example of fiber in React
  };
  const Decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
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
