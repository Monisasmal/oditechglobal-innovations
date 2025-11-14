import React, { useState, useContext } from "react";
import { AppContext } from "../../context/appContext";

function Contact() {
  const { messages, setMessages } = useContext(AppContext);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setSuccess("Please fill all fields.");
      return;
    }
    const newMessage = { ...form, date: new Date().toLocaleString() };
    setMessages([...messages, newMessage]);
    setForm({ name: "", email: "", message: "" });
    setSuccess("Message sent successfully!");
  };

  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>
      {success && <p className="success-msg">{success}</p>}
    </section>
  );
}

export default Contact;
