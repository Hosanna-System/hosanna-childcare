import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx"; // Assurez-vous que le chemin est correct
import RoleBasedRedirect from "./RoleBasedRedirect.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AccessDeniedPage from "./pages/AccessDeniedPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/admin"
          element={
            <RoleBasedRedirect requiredRole="admin">
              <ProtectedRoute component={AdminDashboardPage} />
            </RoleBasedRedirect>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/access-denied" element={<AccessDeniedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
