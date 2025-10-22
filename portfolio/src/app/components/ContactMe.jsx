'use client'

export default function ContactForm() {
  return (
    <section className="bg-[#121212] text-white py-20 px-8">
      <div className="max-w-3xl mx-auto bg-[#1e1e1e] p-8 rounded-2xl">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-lg font-semibold">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-lg font-semibold">E-Mail</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-lg font-semibold">Message</label>
            <textarea
              id="message"
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