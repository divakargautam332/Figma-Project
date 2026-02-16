import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Features from "./components/sections/Features/Features";
import FooterUp from "./components/layouts/Footer/FooterUp";
import Contact from "./components/sections/Contact/Contact";
import Navbar from "./components/layouts/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<FooterUp />} />
        <Route path="/contact" element={<Contact />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
