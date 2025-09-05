import { Link } from "react-router-dom";
import "../navBar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">🏠</Link>
        </div>
        <div>
          <ul className="links">
            <li href="#Home">
              <Link to="/">
                <button className="navbuttons">Home</button>
              </Link>
            </li>
            <li href="#properties">
              <Link to="/properties">
                <button className="navbuttons">Properties</button>
              </Link>
            </li>
            <li href="#about">
              <Link to="/about">
                <button className="navbuttons">About Us</button>
              </Link>
            </li>
            <li href="#contact">
              <Link to="/contact">
                <button className="navbuttons">Contact Us</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="authentication">
          <Link to="/login">
            <button className="navbuttons" href="">
              Login/Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
