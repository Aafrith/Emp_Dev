import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/signup", {
        email,
        password,
      });
      alert(response.data.message); // Show success message

      // Redirect to login page
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account? <a href="/">Log in</a>
      </p>
    </div>
  );
}

export default Signup;
