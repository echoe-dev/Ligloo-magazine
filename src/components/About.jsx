import React from "react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-primary to-gray-100 p-8 rounded shadow-lg border-l-4 border-accent">
      <h2 className="text-3xl font-bold mb-4 text-accent">Contact Us</h2>
      <p className="text-gray-800 mb-4">
        Reach out to Ligloo for inquiries or collaborations:
      </p>
      <ul className="mb-6 space-y-2 text-gray-800">
        <li>Email: <a href="mailto:Ligloo@outlook.com" className="text-secondary hover:underline">Ligloo@outlook.com</a></li>
        <li>Phone: <span className="text-secondary">0833048257</span></li>
      </ul>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-accent text-black px-6 py-3 rounded hover:bg-secondary transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
