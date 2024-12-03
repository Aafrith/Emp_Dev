import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
  
      alert("Login successful!");
      navigate("/dashboard"); // Redirect after token is stored
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.error || "Login failed");
    }
  };
  

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
