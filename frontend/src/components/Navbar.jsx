import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      {/* Left - Logo */}
      <h1 className="text-xl font-extrabold">
        <Link to="/" className="hover:text-gray-300 transition duration-200">
          EmployeeDev
        </Link>
      </h1>

      {/* Center - Navigation Links */}
      <div className="flex-1 flex justify-center gap-6">
        <Link
          to="/"
          className="relative font-bold px-3 py-2 group transition duration-200"
        >
          <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out rounded-full"></span>
          <span className="relative z-10">Home</span>
        </Link>
        <Link
          to="/pricing"
          className="relative font-bold px-3 py-2 group transition duration-200"
        >
          <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out rounded-full"></span>
          <span className="relative z-10">Pricing</span>
        </Link>
        <Link
          to="/contact"
          className="relative font-bold px-3 py-2 group transition duration-200"
        >
          <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out rounded-full"></span>
          <span className="relative z-10">Contact</span>
        </Link>
        {token && (
          <>
            <Link
              to="/dashboard"
              className="relative font-bold px-3 py-2 group transition duration-200"
            >
              <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out rounded-full"></span>
              <span className="relative z-10">Dashboard</span>
            </Link>
            <Link
              to="/interview-prep"
              className="relative font-bold px-3 py-2 group transition duration-200"
            >
              <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out rounded-full"></span>
              <span className="relative z-10">Interview Prep</span>
            </Link>
            <Link
              to="/chatbot"
              className="relative font-bold px-3 py-2 group transition duration-200"
            >
              <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out rounded-full"></span>
              <span className="relative z-10">Chatbot</span>
            </Link>
          </>
        )}
      </div>

      {/* Right - Buttons and Welcome Message */}
      <div className="flex items-center gap-4">
        {!token ? (
          <>
            <Link
              to="/login"
              className="py-2 px-6 bg-gray-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="py-2 px-6 bg-orange-600 text-white font-semibold rounded-full hover:bg-gray-500 transition duration-200"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <p className="font-semibold">Welcome, {username}!</p>
            <button
              onClick={handleLogout}
              className="py-2 px-6 bg-red-600 text-white font-semibold rounded-full hover:bg-red-500 transition duration-200"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
