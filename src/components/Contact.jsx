import React from "react"
import emailjs from "@emailjs/browser"
import { useState } from "react";

const [emailAlert, setEmailAlert] = useState("");

const Contact = () => {

 const handleSubmit = (e) => {
  e.preventDefault();

    emailjs.sendForm(
      "service_gb6luli",
      "template_wc4rlyh",
      e.target,
      "IZpSheeOiWztLGDAO"
    )
  .then(() => {
    setEmailAlert("Message sent successfully!");
    e.target.reset();
  })
  .catch(() => {
    setEmailAlert("Something went wrong. Please try again.");
  });
};




//   const sendEmail = (e) => {
//     e.preventDefault()

//     emailjs.sendForm(
//       "service_gb6luli",
//       "template_wc4rlyh",
//       e.target,
//       "IZpSheeOiWztLGDAO"
//     )
//     .then(() => {
//       alert("Message sent!")
//     })
//     .catch(() => {
//       alert("Something went wrong.")
//     })

//     e.target.reset()
//   }

  return (
    <section className="contact" id="contact">

      <h2 className="text-center">
        How can I <span className="accent">h</span>elp you today?
      </h2>

      <form id="contact-form" onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" required />

        <button type="submit" id="send-button">Send</button>

{emailAlert && <p className="form-message">{emailAlert}</p>}

      </form>

    </section>
  )
}

export default Contact