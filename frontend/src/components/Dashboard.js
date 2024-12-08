import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // Get the current user's information from the token
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // Clear local storage and redirect to login
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            {user && <span>Welcome, {user.email}</span>}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h2>
          <p className="text-gray-700">This is your simple dashboard with a navbar.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
