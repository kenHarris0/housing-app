// import { useState } from "react";
import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import "../loginregister.css";

export default function LoginRegister() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleSignup = () => {
    setSignup(!signup);
  };

  const handleRegister = async () => {
    try {
      if (email && password && phonenumber && name) {
        const res = await axios.post(
          "http://localhost:5000/login/registeruser",
          {
            name,
            email,
            password,
            phonenumber,
          }
        );
        alert("Registered Successfully!");
        console.log(res.data);
        navigate("/");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message); // show backend error message
      } else {
        alert("Something went wrong. Please try again.");
      }
      console.error("Login Error:", err);
      setName("");
      setEmail("");
      setPhonenumber("");
      setPassword("");
    }
  };

  const handleLogin = async () => {
    if (email && password) {
      try {
        const res = await axios.post("http://localhost:5000/login/loginuser", {
          email,
          password,
        });
        console.log("Logged in Successfully!");
        console.log(res.data);
        navigate("/");
      } catch (err) {
        if (err.response && err.response.data.message) {
          alert(err.response.data.message); // show backend error message
        } else {
          alert("Something went wrong. Please try again.");
        }
        console.error("Login Error:", err);
        setPassword("");
      }
    }
  };

  return signup ? (
    <div>
      <div className="login-container">
        <button
          onClick={handleSignup}
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Already a Customer, Login!
        </button>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="username">Email</label>
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
        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="number"
          value={phonenumber}
          placeholder="Enter Phone Number"
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <button className="login-btn" onClick={() => handleRegister()}>
          Submit
        </button>
      </div>
    </div>
  ) : (
    <div>
      <div className="login-container">
        <button
          onClick={handleSignup}
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          New Here, Register!
        </button>
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
