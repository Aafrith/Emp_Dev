import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";
import contact from "../assets/images/contact.jpg";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = "https://api.web3forms.com/submit";
    const accessKey = "cb90afe0-2213-4798-a825-5ab02fd78caa";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16">
      {/* Page Header */}
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you! Feel free to reach out with any questions, feedback, or just to say hi.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden shadow-lg">
        {/* Contact Image */}
        <div className="relative h-full">
          <img
            src={contact}
            alt="Contact Us"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
          <div className="absolute top-4 left-4 text-white bg-orange-500 p-2 rounded-full shadow-lg">
            <FaEnvelope size={24} />
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 space-y-6 flex flex-col justify-center"
        >
          {/* Success Notification */}
          {submitted && (
            <div className="flex items-center bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg">
              <IoMdCheckmarkCircleOutline size={24} className="mr-3" />
              <p>Thank you for contacting us! We'll get back to you shortly.</p>
            </div>
          )}

          {/* Error Notification */}
          {error && (
            <div className="flex items-center bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg">
              <IoMdCloseCircleOutline size={24} className="mr-3" />
              <p>Something went wrong. Please try again later.</p>
            </div>
          )}

          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center space-y-3">
          <FaMapMarkerAlt size={40} className="text-gray-800" />
          <h4 className="text-xl font-bold text-orange-600">Our Location</h4>
          <p className="text-gray-600">Sri Lanka</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <FaPhone size={40} className="text-gray-800" />
          <h4 className="text-xl font-bold text-orange-600">Call Us</h4>
          <p className="text-gray-600">+94773054223</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <FaEnvelope size={40} className="text-gray-800" />
          <h4 className="text-xl font-bold text-orange-600">Email Us</h4>
          <p className="text-gray-600">maafrith15919@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
