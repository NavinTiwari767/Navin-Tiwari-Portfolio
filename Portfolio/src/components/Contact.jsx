import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Theme listener for system changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_5wxuczx', 'template_ss1ofta', form.current, {
        publicKey: 'yVdDcr25JBqxs5EFt',
      })
      .then(
        () => {
          setIsSending(false);
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          setIsSending(false);
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 sm:px-8 py-12 ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <div
        className={`max-w-lg w-full p-8 rounded-xl shadow-xl backdrop-blur-lg ${
          isDarkMode ? "bg-gray-800 bg-opacity-90" : "bg-white"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 right-6 text-gray-500 hover:text-red-600 transition duration-200"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-center text-3xl font-bold">Contact Us</h2>
        <p className="text-center text-sm opacity-75">
          We'd love to hear from you!
        </p>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-5">
          <div className="space-y-4">
            <input
              type="text"
              name="user_name"
              required
              className={`w-full px-4 py-3 rounded-md border outline-none ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-600"
              } focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your Name"
            />

            <input
              type="email"
              name="user_email"
              required
              className={`w-full px-4 py-3 rounded-md border outline-none ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-600"
              } focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your Email"
            />

            <textarea
              name="message"
              required
              rows="4"
              className={`w-full px-4 py-3 rounded-md border outline-none resize-none ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-600"
              } focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 rounded-md text-white font-medium transition-transform transform ${
              isSending
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 hover:scale-105"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
