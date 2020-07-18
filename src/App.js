import React, { useState } from 'react';
import './App.css';
import InputName from "./Input/Input";

function App() {
    const [name, setName] = useState(null);
    console.log(name)
  return (
    <div className="App">
      <h1>This is a forum</h1>
         {name===null ? (
        <InputName onSubmit={value => setName(value)}/>) :
             (<div>
                 <h2>Welcome to the forum, {name}</h2>
             </div>)}
    </div>
  );
}

export default App;
