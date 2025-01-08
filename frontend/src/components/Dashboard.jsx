import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const username = localStorage.getItem("username");

  return (
    <div className="min-h-screen bg-white text-black p-6 mt-20">
      <h1 className="text-3xl font-bold mb-4">Welcome, {username}!</h1>
      <p className="text-lg mb-4">Access your personalized resources below:</p>
      <ul className="list-disc pl-6">
        <li>
          <Link to="/tutorials" className="text-blue-600 hover:underline">
            Role-Based Tutorials
          </Link>
        </li>
        <li>
          <Link to="/interview-prep" className="text-blue-600 hover:underline">
            Interview Preparation
          </Link>
        </li>
        <li>
          <Link to="/chatbot" className="text-blue-600 hover:underline">
            Chatbot Assistance
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
