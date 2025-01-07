import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <header className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Employee Development Software</h1>
          <p className="mt-2 text-lg">Empowering employees to upskill and excel in their careers.</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us?</h2>
          <p className="text-center text-lg mb-6">
            Our platform offers AI-driven tutorials, role-based learning paths, and tools for career advancement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Role-Based Learning</h3>
              <p>Access tutorials and materials tailored to specific software industry roles.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Interview Preparation</h3>
              <p>Practice mock interviews and prepare for real-world challenges with our resources.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">AI Chatbot</h3>
              <p>Get career advice and answers to your queries instantly with our AI chatbot.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-lg mb-6">Sign up or log in to explore all features.</p>
          <div className="flex justify-center gap-4">
            <Link
              to="/signup"
              className="py-3 px-6 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="py-3 px-6 bg-gray-700 text-white font-bold rounded hover:bg-gray-800"
            >
              Log In
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
