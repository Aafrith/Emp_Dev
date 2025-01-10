import React from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaDatabase,
  FaBug,
  FaLayerGroup,
  FaRobot,
  FaChartBar,
  FaComments,
  FaVideo,
  FaUsers,
} from "react-icons/fa";
import int from "../assets/images/int.jpg";
import chatai from "../assets/images/chatai.jpg";

function Dashboard() {
  const username = localStorage.getItem("username");

  const roles = [
    { name: "Frontend Developer", path: "/roles/frontend", icon: <FaLaptopCode /> },
    { name: "Backend Developer", path: "/roles/backend", icon: <FaDatabase /> },
    { name: "QA Engineer", path: "/roles/qa", icon: <FaBug /> },
    { name: "Fullstack Developer", path: "/roles/fullstack", icon: <FaLayerGroup /> },
    { name: "Machine Learning Engineer", path: "/roles/ml", icon: <FaRobot /> },
    { name: "Data Scientist", path: "/roles/data-science", icon: <FaChartBar /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 via-orange-900 to-gray-800 text-white py-16 shadow-lg">
        <div className="container mx-auto text-center mt-16">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Your Dashboard, {username}!
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore tailored resources, track your progress, and unlock tools for career growth.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6 space-y-16">
        {/* Role Selection */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8">Choose Your Role</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {roles.map((role, index) => (
    <Link
      key={index}
      to={role.path}
      className="relative p-6 bg-gradient-to-br from-blue-100 via-gray-200 to-orange-100 text-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 text-center overflow-hidden"
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-100 to-gray-400 animate-border-wave"></div>
      <div className="relative z-10">
        <div className="text-5xl text-orange-500 mb-4">{role.icon}</div>
        <h3 className="text-xl font-bold text-gray-900">{role.name}</h3>
      </div>
    </Link>
  ))}
</div>

        </section>

        {/* Interview Preparation */}
        <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-12 px-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Interview Preparation</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Get ready to ace your interviews with comprehensive resources, mock sessions, and real-time feedback.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10 ">
              <div className="flex items-start space-x-6">
                <FaVideo className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold">Mock Interviews</h3>
                  <p>
                    Practice with simulated interviews tailored to your role, with expert feedback to improve your performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaUsers className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold">Panel Guidance</h3>
                  <p>
                    Learn from industry experts through panel discussions and Q&A sessions.
                  </p>
                </div>
              </div>
              <Link
                to="/interview-prep"
                className="inline-block mt-6 py-3 px-6 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
              >
                Start Preparing
              </Link>
            </div>
            <img
              src={int}
              alt="Interview Preparation"
              className="rounded-lg shadow-lg w-full transform hover:scale-105 transition duration-300"
            />
          </div>
        </section>

        {/* AI Chat Application */}
        <section className="bg-gradient-to-r from-gray-100 to-gray-50 py-12 px-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">AI Chat Assistance</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions? Our AI-powered chat application is here to help you instantly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src={chatai}
              alt="AI Chat Assistance"
              className="rounded-lg shadow-lg w-full transform hover:scale-105 transition duration-300"
            />
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaComments className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold">Real-Time Support</h3>
                  <p>
                    Get instant answers to your doubts from our intelligent chatbot.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaRobot className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="text-2xl font-semibold">Advanced AI</h3>
                  <p>
                    Leverage cutting-edge AI for detailed explanations and personalized guidance.
                  </p>
                </div>
              </div>
              <Link
                to="/chatbot"
                className="inline-block mt-6 py-3 px-6 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
              >
                Chat Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
