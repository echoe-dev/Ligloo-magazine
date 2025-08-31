import React from "react";

export default function Contact() {
  return (
    <div className="bg-white p-8 rounded shadow">
      <h2 className="text-3xl font-bold mb-4 text-primary">Contact Us</h2>
      <p className="text-gray-700 mb-4">
        Have questions or feedback? Reach out to us!
      </p>
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
          className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
