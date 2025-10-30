import React from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
