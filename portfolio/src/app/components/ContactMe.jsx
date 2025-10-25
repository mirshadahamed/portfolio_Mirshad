'use client'
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // To show success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send the form data to the backend API
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.status === 200) {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } else {
      setStatus({ type: 'error', message: data.error || 'Something went wrong!' });
    }
  };

  return (
    <section className="bg-[#121212] text-white py-20 px-8">
      <div className="max-w-3xl mx-auto bg-[#1e1e1e] p-8 rounded-2xl">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

        {/* Status message */}
        {status && (
          <div
            className={`text-center mb-6 ${
              status.type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {status.message}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-lg font-semibold">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-lg font-semibold">E-Mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-lg font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 py-3 px-8 rounded-md font-semibold hover:opacity-90 transition-all duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}