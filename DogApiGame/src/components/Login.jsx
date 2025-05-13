import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Game from "./DogApi";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const matchedAccount = storedAccounts.find(
      (account) => account.name === name && account.password === password
    );

    if (!name || !password) {
      alert("Please fill in both fields.");
      return;
    }

    if (!matchedAccount) {
      alert("Name or password is incorrect. Please try again.");
      setName("");
      setPassword("");
      return;
    }
    navigate("/game");
  }

  return (
    <div className="container">
      <h1>Log in</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <div className="login-buttons">
        <button onClick={handleLogin}>Login</button>
        <button className="back-button" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
