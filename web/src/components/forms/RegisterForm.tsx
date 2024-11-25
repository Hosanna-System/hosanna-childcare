// Formulaire d’inscription.
// - Créez un formulaire d’inscription avec les champs suivants : nom, prénom, email, mot de passe, confirmation du mot de passe.
// - Créez un bouton pour soumettre le formulaire.
// - Créez un lien pour rediriger vers la page de connexion.
// - Créez un lien pour rediriger vers la page de réinitialisation de mot de passe.
// ----------------------------------------------
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/authEndpoints.js';
import { Link } from 'react-router-dom';
import '../../assets/styles/RegisterForm.css';


const RegisterForm: React.FC = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await register({ firstName, lastName, email, password });
            navigate('/login');
        } catch (err) {
            setError('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
            <Link to="/login">Already have an account? Login</Link>
            <Link to="/forgot-password">Forgot password?</Link>
        </form>
    );
};

export default RegisterForm;