import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/LoginForm.css';
import '../../assets/styles/LoginPage.css';

interface LoginFormProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
    error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, setEmail, password, setPassword, handleSubmit, error }) => {

    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <h2>Connexion</h2>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Se connecter</button>
            <Link to="/register">Pas encore de compte ?</Link>
        </form>
    );
};

export default LoginForm;
