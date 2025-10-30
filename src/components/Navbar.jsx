import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="logo">
          Web <span className="highlight">developer</span>
        </h2>

        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
