// Formulaire pour réinitialiser un mot de passe.

import React, { useState } from 'react';
import { forgotPassword } from '../../services/authEndpoints';
import '../../assets/styles/ForgotPasswordForm.css';
import { useNotification } from '../../contexts/notificationContext.tsx';
import { INotification } from '../../types/INotification.ts';
import { Types } from "mongoose";

interface ForgotPasswordFormProps {
    userId: unknown;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ userId }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const { showNotification } = useNotification();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await forgotPassword(email);
            setMessage(response.message);
            const _id = new Types.ObjectId();
            const notification: INotification = {
                id: _id,
                userId: userId as Types.ObjectId,
                message: response.message,
                type: 'success',
                read: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            showNotification(notification);
        } catch (err) {
            setError('Failed to send reset password email. Please try again.');
            const _id = new Types.ObjectId();
            const notification: INotification = {
                id: _id,
                userId: userId as Types.ObjectId,
                message: 'Failed to send reset password email. Please try again.',
                type: 'error',
                read: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            showNotification(notification);
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
                <span className="info">
                    Enter the email address associated with your account.
                </span>
                <br />
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;