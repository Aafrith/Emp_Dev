import React, { useState } from "react";
import { FaCheckCircle, FaCrown, FaRocket } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

function PricingPage() {
  const token = localStorage.getItem("token");

  const handlePayButtonClick = (plan) => {
    if (!token) {
      alert("Please log in to proceed.");
      window.location.href = "/login";
    } else {
      window.location.href = "/payment";
    }
  };

  // State for FAQ toggling
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I pay for the plans?",
      answer:
        "You can pay using your credit card, debit card, or other payment methods available on our payment page.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes, you can upgrade your plan at any time from your account settings or the pricing page.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "We offer refunds within the first 14 days of purchase if you're not satisfied with the service.",
    },
    {
      question: "Are payments secure?",
      answer:
        "Absolutely. All payments are processed through a secure payment gateway and encrypted for safety.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-700 to-orange-700 text-white py-16 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mt-16">Pricing Plans</h1>
          <p className="mt-4 text-xl font-light max-w-2xl mx-auto">
            Select a plan tailored to your goals and unlock your potential.
          </p>
        </div>
      </header>

      {/* Pricing Plans */}
      <main className="container mx-auto py-16 px-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Normal Plan */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border-2 border-gray-400">
            <div className="text-center mb-6">
              <FaCheckCircle className="text-5xl text-gray-800 mx-auto" />
              <h3 className="text-3xl font-bold mt-4">Normal Plan</h3>
            </div>
            <p className="text-lg text-gray-700 text-center">
              Basic access to tutorials and interview preparation tools.
            </p>
            <div className="mt-8 py-3 px-8 w-full text-center bg-gray-300 text-gray-800 font-semibold rounded-lg">
              Free
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-orange-200 to-gray-200 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-110 relative border-4 border-orange-600">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm uppercase font-bold py-2 px-6 rounded-full shadow-md">
              Most Popular
            </div>
            <div className="text-center mb-6">
              <FaCrown className="text-5xl text-orange-600 mx-auto" />
              <h3 className="text-3xl font-bold mt-4">Pro Plan</h3>
            </div>
            <p className="text-lg text-gray-800 text-center">
              Advanced tutorials, exclusive resources, and interview prep
              features.
            </p>
            <div className="text-2xl font-bold text-gray-900 text-center mt-4">
              $19.99/month
            </div>
            <button
              onClick={() => handlePayButtonClick("pro")}
              className="mt-6 py-3 px-8 w-full bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-800 transition duration-300"
            >
              Choose Plan
            </button>
          </div>

          {/* Ultra Pro Plan */}
          <div className="bg-gradient-to-br from-orange-50 to-gray-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border-2 border-gray-600">
            <div className="text-center mb-6">
              <FaRocket className="text-5xl text-gray-800 mx-auto" />
              <h3 className="text-3xl font-bold mt-4">Ultra Pro Plan</h3>
            </div>
            <p className="text-lg text-gray-800 text-center">
              All premium features, including unlimited AI chatbot interactions.
            </p>
            <div className="text-2xl font-bold text-gray-900 text-center mt-4">
              $29.99/month
            </div>
            <button
              onClick={() => handlePayButtonClick("ultra-pro")}
              className="mt-6 py-3 px-8 w-full bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Choose Plan
            </button>
          </div>
        </section>
      </main>

      {/* FAQ Section */}
      <section className="py-10 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-gray-50 to-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <HiChevronUp className="text-xl text-gray-600" />
                  ) : (
                    <HiChevronDown className="text-xl text-gray-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
