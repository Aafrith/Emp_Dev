// src/components/Navbar.jsx
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
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">MyApp</Link>
      </h1>
      <div className="flex items-center gap-4">
        {!token ? (
          <>
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <p>Welcome, {username}!</p>
            <button
              onClick={handleLogout}
              className="py-2 px-4 bg-red-600 rounded hover:bg-red-800"
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
