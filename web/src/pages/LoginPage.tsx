// Page pour se connecter (tous les rôles).
// On peut entrer son adresse email et son mot de passe pour se connecter.
// On peut aussi aller à la page de réinitialisation de mot de passe.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api.js';
import { useAuth } from '../contexts/AuthContext.tsx';
import { Link } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm.tsx';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await login({ email, password });
            setUser(user);
            navigate('/');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div>
            <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                error={error}
            />
            <Link to="/forgot-password">Forgot password?</Link>
        </div>
    );
};

export default LoginPage;