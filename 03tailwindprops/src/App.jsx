import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Dushyant",
    age: 23,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="text-black bg-green-400 p-4 rounded-xl">Tailwind Test</h1>
      <Card name="Aruna" btnText="Click Me" />
      <Card />

      {/* <Card name="Ankita" someObj={newArr} /> */}
    </>
  );
}

export default App;
