import React from "react";
import { Link } from "react-router-dom";

function PricingPage() {
  const token = localStorage.getItem("token");

  const handlePayButtonClick = (plan) => {
    if (!token) {
      // If not logged in, redirect to login/signup page
      alert("Please log in to proceed with payment.");
      window.location.href = "/login"; // Redirect to login page
    } else {
      // If logged in, redirect to payment gateway page
      window.location.href = "/payment"; // Replace with actual payment gateway route
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 min-h-screen">
      <header className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-8 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold">Pricing Plans</h1>
          <p className="mt-2 text-lg">Choose the right plan for your career growth.</p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Normal Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Normal Plan</h3>
            <p className="text-lg">Basic access to tutorials and interview preparation tools.</p>
            <button
              onClick={() => handlePayButtonClick("normal")}
              className="mt-6 py-3 px-8 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Pay Now
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Pro Plan</h3>
            <p className="text-lg">Access advanced tutorials and interview prep features.</p>
            <button
              onClick={() => handlePayButtonClick("pro")}
              className="mt-6 py-3 px-8 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Pay Now
            </button>
          </div>

          {/* Ultra Pro Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Ultra Pro Plan</h3>
            <p className="text-lg">All premium features, including unlimited AI chatbot interactions.</p>
            <button
              onClick={() => handlePayButtonClick("ultra-pro")}
              className="mt-6 py-3 px-8 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Pay Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PricingPage;
