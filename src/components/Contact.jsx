import React from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "SERVICE_ID",
      "TEMPLATE_ID",
      e.target,
      "IZpSheeOiWztLGDAO"
    )
    .then(() => {
      alert("Message sent!")
    })
    .catch(() => {
      alert("Something went wrong.")
    })

    e.target.reset()
  }

  return (
    <section className="contact" id="contact">

      <h2 className="text-center">
        How can I <span className="accent">h</span>elp you today?
      </h2>

      <form id="contact-form" onSubmit={sendEmail}>

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" required />

        <button type="submit" id="send-button">Send</button>

      </form>

    </section>
  )
}

export default Contact