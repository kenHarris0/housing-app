import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/login">
            <button className="auth" href="">
              Login/Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
