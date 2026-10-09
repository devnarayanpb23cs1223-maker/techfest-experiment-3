import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been submitted!");
    setMessage("");
  };

  return (
    <div>
      <h1>Contact Us</h1>

      <p>Mar Baselios College of Engineering and Technology</p>
      <p>Trivandrum, Kerala</p>
      <p>Email: techfest2026@mbcet.ac.in</p>

      <h2>Send us a message</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows="5"
          cols="40"
          required
        />

        <br /><br />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;