'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_y99jezw',
        'template_cbykp4y',
        templateParams,
        'CP6FyzPAee1lTSTzf'
      );

      setStatus({ type: 'success', message: '✓ Message queued for delivery' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: '✗ Delivery failed' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-black text-white py-20 px-6 font-mono">
      <div className="max-w-2xl mx-auto">
        {/* Title with lines */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500"></div>
            <h2 className="text-3xl font-bold text-gray-300">CONTACT</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <p className="text-gray-500">secure channel // encrypted transmission</p>
        </div>

        {/* Minimal Form */}
        <div className="space-y-10">
          {[
            { id: 'name', label: 'NAME', placeholder: 'enter identifier' },
            { id: 'email', label: 'EMAIL', placeholder: 'address@domain.com' },
            { id: 'message', label: 'MESSAGE', placeholder: 'type your message...', isTextarea: true },
          ].map((field) => (
            <div key={field.id} className="relative">
              <label className="text-green-500 text-sm mb-2 block">
                <span className="text-gray-600">//</span> {field.label}
              </label>
              
              <div className="relative">
                {field.isTextarea ? (
                  <textarea
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-800 text-white focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none placeholder-gray-700"
                  />
                ) : (
                  <input
                    name={field.id}
                    type={field.id === 'email' ? 'email' : 'text'}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-800 text-white focus:outline-none focus:border-orange-500 transition-colors duration-300 placeholder-gray-700"
                  />
                )}
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-500"></div>
              </div>
              
              <div className="mt-1 text-right">
                <span className="text-gray-700 text-xs">
                  {formData[field.id]?.length || 0}/∞
                </span>
              </div>
            </div>
          ))}

          {/* Status */}
          {status && (
            <div className={`p-4 rounded border ${status.type === 'success' ? 'border-green-800 text-green-400' : 'border-red-800 text-red-400'}`}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-black to-gray-900 border border-gray-800 rounded-lg text-white font-bold tracking-wider hover:border-orange-500 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
            
            <div className="relative flex items-center justify-center gap-3">
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  <span>SENDING</span>
                </>
              ) : (
                <>
                  <span className="text-green-500">$</span>
                  <span>SEND_MESSAGE</span>
                  <span className="text-gray-600 text-sm">[ENTER]</span>
                </>
              )}
            </div>
          </motion.button>

          {/* Footer Note */}
          <div className="text-center text-gray-700 text-sm pt-8 border-t border-gray-900">
            <p>Messages are end-to-end encrypted and delivered within seconds</p>
            <p className="mt-2">mirshadahamed135@gmail.com • +94 76 395 8485</p>
          </div>
        </div>
      </div>
    </section>
  );
}