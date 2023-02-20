import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [name, setName] = useState("_____");
  const [input, setInput] = useState("");
  const handleButtonClick = (e) => {
    setName(input);
  };
  const handleNameChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div id="main">
      <input id="input" onChange={handleNameChange}></input>
      <button id="button" onClick={handleButtonClick}>
        Click
      </button>
      <p id="text"> Hello my name is {name} and I study at Newton School</p>
    </div>
  );
};

export default App;
