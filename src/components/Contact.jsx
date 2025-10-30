import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>
          Contact <span>me</span>
        </h2>

        <div className="contact-container">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <div className="info-box">
              <p className="label">
                <FaEnvelope className="icon" /> Email
              </p>
              <p className="info-text">usamaisrar45@gmail.com</p>

              <p className="label">
                <FaPhone className="icon" /> Phone/WhatsApp
              </p>
              <p className="info-text">+92 3165605133</p>
            </div>

            {/* Social Icons */}
            <div className="social-links">
              <a href="#">
                <FaWhatsapp />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="What's your good name" />

            <label>Email</label>
            <input type="email" placeholder="What's your email address" />

            <label>Message</label>
            <textarea placeholder="What do you want to say"></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
