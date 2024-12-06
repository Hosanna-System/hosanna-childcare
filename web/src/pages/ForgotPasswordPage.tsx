// Page pour réinitialiser le mot de passe.
// On peut entrer son adresse email pour recevoir un lien de réinitialisation.
// On peut aussi retourner à la page de connexion.
import React from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.tsx';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import '../assets/styles/ForgotPasswordPage.css';
import { Types } from "mongoose";

const ForgotPasswordPage: React.FC = () => {
    const getLocalUserId = () => {
        const userId = localStorage.getItem('userId') as any as Types.ObjectId;
        return userId;
    }



    return (
        <div>
            <Header />
            <div className="forgot-password-page">
                <ForgotPasswordForm
                    userId={getLocalUserId()}
                />
                <div className="back-to-login">
                    <Link to="/login">Retour à la page de connexion</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ForgotPasswordPage;
