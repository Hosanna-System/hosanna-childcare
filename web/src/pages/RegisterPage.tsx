// Page pour permettre aux parents et administrateurs de créer un compte.
// On peut choisir le type de compte (parent ou administrateur) et ajouter les informations nécessaires.
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import RegisterForm from '../components/forms/RegisterForm.tsx';
import '../assets/styles/RegisterPage.css';
import React from 'react';

const RegisterPage: React.FC = () => {

    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">  
                <RegisterForm />
            </div>
            <Footer />
        </div>
    );
};

export default RegisterPage;