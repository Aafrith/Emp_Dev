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
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Hello, {username}!</h2>
        <p>This is your secure dashboard.</p>
      </div>
    </div>
  );
}

export default Dashboard;
