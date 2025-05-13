import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DogApi from "./components/DogApi";
import "./components/DogApi.css";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="game-title">Dog API Game</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<DogApi />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
