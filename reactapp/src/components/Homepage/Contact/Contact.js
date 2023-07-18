import React from 'react';
import './contact.css'; // Import the CSS file for the component
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Feel free to reach out to us with any inquiries or feedback regarding our Kitchen Display System.
      </p>
      <div className="contact-info">
        <div>
          <h2>Visit Us</h2>
          <p>Sri Krishna College of Engineering and Technology</p>
          <p>Coimbatore, TamilNadu, 641028</p>
        </div>
        <div>
          <h2>Email Us</h2>
          <p>monishk477@gmail.com</p>
        </div>
        <div>
          <h2>Call Us</h2>
          <p>Phone: 8825832253</p>
        </div>
      </div>
      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;
