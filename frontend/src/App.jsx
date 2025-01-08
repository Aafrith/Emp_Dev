import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Tutorials from "./components/Tutorials";
import InterviewPrep from "./components/InterviewPrep";
import Chatbot from "./components/Chatbot";
import PricingPage from "./components/PricingPage"; // Import Pricing Page
import PaymentGateway from "./components/PaymentGateway"; // Import Payment Gateway page
import Contact from "./components/Contact";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tutorials"
          element={
            <ProtectedRoute>
              <Tutorials />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interview-prep"
          element={
            <ProtectedRoute>
              <InterviewPrep />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <Chatbot />
            </ProtectedRoute>
          }
        />
        <Route path="/pricing" element={<PricingPage />} /> {/* Pricing Page */}
        <Route path="/payment" element={<PaymentGateway />} /> {/* Payment Gateway Page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
      </Routes>
    </Router>
  );
}

export default App;
