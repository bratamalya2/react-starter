import React, { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <h1>Enter text in the box</h1>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <br />
        <h2>{content}</h2>
      </form>
    </div>
  );
}

export default App;
