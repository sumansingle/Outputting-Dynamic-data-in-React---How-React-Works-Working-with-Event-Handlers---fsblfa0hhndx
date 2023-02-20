import React, { useState, useEffect } from "react";
import "../styles/App.css";
function App() {
  const [name, setName] = useState("_____");
  const [input, setInput] = useState("");
  const handleNameChange = (event) => {
    setInput(event.target.value);
    console.log(input, name);
  };
  const handleButtonClick = () => {
    console.log(input, name);
    setName(input);
    console.log(input, name);
    // Instead of using document.getElementById, we can use the `name` state value to render the text
  };

  return (
    <div>
      <input id="input" type="text" onChange={handleNameChange} />
      <button id="button" onClick={handleButtonClick}>
        Click
      </button>
      <p>Hello my name is {name} and I study at Newton School</p>
    </div>
  );
}

export default App;
