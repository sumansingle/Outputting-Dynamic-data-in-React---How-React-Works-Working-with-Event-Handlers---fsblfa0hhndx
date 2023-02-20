import React, { useState, useEffect } from "react";
import "../styles/App.css";
const[name,setName]=useState('');
const [curr,setCurr]=useState('____');
function nameChange(e){
setName(e.target.value);
}
return (
<div id="main">
<input id='input' onChange={nameChange}></input>
<button id='button' onClick={() => setCurr(name)}>Click</button>
<p id='text'> Hello my name is {curr} and I study at Newton School</p>
</div>
)
}
export default App;
