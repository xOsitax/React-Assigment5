import React, { useState } from "react";
import DogApi from "./components/DogApi";
import "./components/DogApi.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="game-title">Dog API Game</h1>

      <DogApi />
    </div>
  );
}

export default App;
