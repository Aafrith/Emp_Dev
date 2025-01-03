import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/signup", {
        username,
        email,
        password,
      });
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="w-full max-w-md bg-gray-200 p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded bg-gray-100 text-black border border-gray-600 focus:outline-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-100 text-black border border-gray-600 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-100 text-black border border-gray-600 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full py-3 rounded bg-black text-white font-bold hover:bg-white hover:text-black transition"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/" className="text-gray-700 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
