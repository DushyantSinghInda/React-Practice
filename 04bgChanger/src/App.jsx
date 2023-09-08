import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive");

  const colorArr = [
    "red",
    "green",
    "yellow",
    "blue",
    "purple",
    "black",
    "olive",
    "gray",
    "pink",
    "lavender",
  ];
  const handleClick = (data) => {
    setColor(data);
  };

  return (
    <div
      className="bg-black w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="bg-white p-3 rounded-2xl">
          {colorArr.map((color, index) => (
            <Button color={color} index={index} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
