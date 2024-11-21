// Redirection des utilisateurs en fonction de leur rôle.

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';


const RoleBasedRedirect = ({ children }) => {
    const { user } = useAuth();

    switch (user.role) {
        case 'superadmin':
            return <Navigate to="/superadmin/dashboard" />;
        case 'admin':
            return <Navigate to="/admin/dashboard" />;
        case 'monitor':
            return <Navigate to="/monitor/dashboard" />;
        case 'parent':
            return <Navigate to="/parent/dashboard" />;
        default:
            return <Navigate to="/login" />;
    }
};


export default RoleBasedRedirect;