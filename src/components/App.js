import React,{useState,useEffect} from 'react'
import '../styles/App.css';
function App() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    const textElement = document.getElementById('text');
    textElement.innerHTML = "";
    textElement.innerHTML = name;
    // Instead of using document.getElementById, we can use the `name` state value to render the text
  };

  return (
    <div>
      <input id="input" type="text" value={name} onChange={handleNameChange} />
      <button id="button" onClick={handleButtonClick}>Click</button>
      <p>Hello my name is <a id="text">____</a> and I study at Newton School</p>
    </div>
  );
}

export default App;
