import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isPasswordValid = (pwd) => {
    const minLength = /.{8,}/;
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const digit = /[0-9]/;
    const special = /[!@#$%^&*(),.?":{}|<>]/;
    return (
      minLength.test(pwd) &&
      upper.test(pwd) &&
      lower.test(pwd) &&
      digit.test(pwd)
    );
  };

  function handleRegister() {
    if (!name || !password) {
      alert("Please fill in both fields.");
      return;
    }

    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    if (storedAccounts.some((account) => account.name === name)) {
      alert("This account already exists.");
      return;
    }
    if (!isPasswordValid(password)) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number."
      );
      return;
    }

    const newAccount = { name, password };
    storedAccounts.push(newAccount);

    localStorage.setItem("accounts", JSON.stringify(storedAccounts));
    alert("Registration successful!");
    navigate("/login");

    setName("");
    setPassword("");
  }

  return (
    <div className="container">
      <h1>Register</h1>
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
      <button onClick={handleRegister}>Register</button>
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default RegisterForm;
