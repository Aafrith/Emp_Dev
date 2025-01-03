import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="bg-gray-900 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
        <div className="flex items-center gap-4">
          <p className="text-white">Welcome, {username}</p>
          <button
            className="py-2 px-4 bg-red-600 rounded hover:bg-red-800 transition text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Hello, {username}!</h2>
        <p>This is your secure dashboard.</p>
      </div>
    </div>
  );
}

export default Dashboard;
