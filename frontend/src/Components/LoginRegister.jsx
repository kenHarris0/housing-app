// import { useState } from "react";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import "../loginregister.css";

export default function LoginRegister() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      console.log("Logged in Successfully!");
      navigate("/");
    }
  };

  return (
    <div>
      <div className="login-container">
        <label htmlFor="username">UserName</label>
        <input
          type="email"
          value={email}
          placeholder="Enter the email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={() => handleLogin()}>
          Submit
        </button>
      </div>
    </div>
  );
}
