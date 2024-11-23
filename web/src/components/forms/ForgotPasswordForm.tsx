// Formulaire pour réinitialiser un mot de passe.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../services/authEndpoints';
import '../../assets/styles/ForgotPasswordForm.css';


const ForgotPasswordForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await forgotPassword(email);
            setMessage(response.message);
        } catch (err) {
            setError('Failed to send reset password email. Please try again.');
        }
    };

    return (
        <div className="forgot-password-form">
            <h2>Forgot Password</h2>
            {error && <div className="error-message">{error}</div>}
            {message && <div className="success-message">{message}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;