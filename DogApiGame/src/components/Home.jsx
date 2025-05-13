import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Guess The Dog</h1>

      <button onClick={() => navigate("/login")}>Log in</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}

export default HomePage;
