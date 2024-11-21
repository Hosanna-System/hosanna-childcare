import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './ProtectedRoute'; // Assurez-vous que le chemin est correct
import RoleBasedRedirect from './RoleBasedRedirect';
import NotFoundPage from './pages/NotFoundPage';
import AccessDeniedPage from './pages/AccessDeniedPage';
import { useAuth } from './contexts/AuthContext'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <ProtectedRoute path="/admin" element={<AdminDashboard />} />
        <RoleBasedRedirect
          path="/admin"
          element={<AccessDeniedPage />}
          requiredRole="admin"
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
