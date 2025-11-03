import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        {/* Left Side: Profile Image */}
        <div className="hero-left">
          <img
            src="/images/profile.jpg"
            alt="Usama Israr"
            className="hero-img"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="hero-text">
          <p className="intro">Hello I am</p>
          <h1>Usama Israr</h1>
          <h2>
            Frontend <span>Web Developer</span>
          </h2>
          <p className="desc">
            I create clean, responsive, and modern websites using{" "}
            <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and{" "}
            <span>React.js</span>.
          </p>

          <div className="hero-buttons">
            {/* Opens the resume in a new tab */}
            <a
              href="/Usama_Resume.pdf"
              target="usama"
              rel="noopener noreferrer"
              className="btn primary"
            >
              View Resume
            </a>

            <a href="#contact" className="btn secondary">
              Say Hello
            </a>

            <a href="#projects" className="btn link">
              ▶ Watch my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
