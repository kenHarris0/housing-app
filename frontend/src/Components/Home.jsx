import React from "react";
import "../navBar.css";
import "../Components/LoginRegister";

export default function Home() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">🏠</div>
        <div>
          <ul className="links">
            <li href="#Home">Home</li>
            <li href="#properties">Properties</li>
            <li href="#about">About Us</li>
            <li href="#contact">Contact Us</li>
          </ul>
        </div>
        <div className="authentication">
          <button className="auth" href="">
            Login/Register
          </button>
        </div>
      </div>
    </div>
  );
}
