import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Registration successful for ${formData.name}!`);

    setFormData({
      name: "",
      email: "",
      phone: "",
      event: ""
    });
  };

  return (
    <div className="form-container">
      <h1>TechFest 2026 Registration</h1>

      <form onSubmit={handleSubmit} className="registration-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label>Event</label>
        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        >
          <option value="">Select an event</option>
          <option value="CodeSprint">CodeSprint</option>
          <option value="RoboWar">RoboWar</option>
          <option value="Web Design Challenge">
            Web Design Challenge
          </option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;