import React from "react";
import Houses from "./Houses.jsx";
import Navbar from "./Navbar.jsx";

import "../Components/LoginRegister";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "1200px", margin: "30px auto", padding: "20px" }}>
        <Houses />
      </div>
    </>
  );
}
