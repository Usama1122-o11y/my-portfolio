import React from "react";
import AboutImage from "./about.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          {/* ✨ Text Section */}
          <div className="about-text">
            <h2>
              About <span>Me</span>
            </h2>
            <p>
              Hello! I’m <strong>Usama Israr</strong>, a passionate{" "}
              <strong>Frontend Developer</strong> from Pakistan. I specialize in
              building modern, responsive, and user-focused web experiences
              using <strong>HTML, CSS, JavaScript</strong>, and{" "}
              <strong>React</strong>.
            </p>
            <p>
              I enjoy turning complex ideas into clean and functional designs.
              My goal is to write efficient code, create intuitive UIs, and
              deliver high-quality web solutions that make a real impact.
            </p>
          </div>

          {/* 💻 Image Section */}
          <div className="about-image">
            <img
              src={AboutImage}
              alt="Usama Israr - Frontend Developer"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
