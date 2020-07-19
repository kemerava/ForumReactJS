import React, { useState } from 'react';
import './App.css';
import InputName from "./Input/InputName";
import InputPost from "./Input/InputPost";
import ListPosts from "./ListPosts";

function App() {
    const [name, setName] = useState(null);
  return (
    <div className="App">
      <h1>This is a forum</h1>
         {name===null ? (
            <InputName onSubmit={value => setName(value)}/>) :
             (<div>
                 <h2>Welcome to the forum, {name}</h2>
                 <ListPosts props = {name}/>
             </div>)}
    </div>
  );
}

export default App;
