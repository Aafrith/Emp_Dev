import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Tutorials from "./pages/Tutorials";
import InterviewPrep from "./pages/InterviewPrep";
import Chatbot from "./components/Chatbot"; // Still a standalone component
import PricingPage from "./pages/PricingPage";
import PaymentGateway from "./pages/PaymentGateway";
import Contact from "./pages/Contact";
import Frontend from "./pages/roles/Frontend";
import Backend from "./pages/roles/Backend";
import QA from "./pages/roles/QA";
import Fullstack from "./pages/roles/Fullstack";
import ML from "./pages/roles/ML";
import DataScience from "./pages/roles/DataScience";

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
        {/* Role-specific routes */}
        <Route
          path="/roles/frontend"
          element={
            <ProtectedRoute>
              <Frontend />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roles/backend"
          element={
            <ProtectedRoute>
              <Backend />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roles/qa"
          element={
            <ProtectedRoute>
              <QA />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roles/fullstack"
          element={
            <ProtectedRoute>
              <Fullstack />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roles/ml"
          element={
            <ProtectedRoute>
              <ML />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roles/data-science"
          element={
            <ProtectedRoute>
              <DataScience />
            </ProtectedRoute>
          }
        />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/payment" element={<PaymentGateway />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
