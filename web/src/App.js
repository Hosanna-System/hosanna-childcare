import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './ProtectedRoute.tsx'; // Assurez-vous que le chemin est correct
import RoleBasedRedirect from './RoleBasedRedirect.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import AccessDeniedPage from './pages/AccessDeniedPage.tsx';
import { useAuth } from './contexts/AuthContext.tsx'; // Assurez-vous que le chemin est correct

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
