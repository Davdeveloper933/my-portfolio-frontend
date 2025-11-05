import styles from "./ContactStyles.module.css";
import { useState } from "react";

const { container } = styles;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch(
        "https://my-portfolio-backend-czmu058nj-davdeveloper933s-projects.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      setStatus(result.message);
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className={container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit} action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            type="message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="If you are impressed by my projects, you can send your message and I will definitely answer you"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      <p>{status}</p>
    </section>
  );
};

export default Contact;
