import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/HomePage.css';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Loader from '../components/Loader.tsx';
import Button from '../components/Button.tsx';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <Header />
            <main className="home-main">
                <section className="features">
                    <h2>Nos fonctionnalités principales</h2>
                    <div className="feature-cards">
                        <div className="card">
                            <h3>Gestion des enfants</h3>
                            <p>Ajoutez et gérez les informations des enfants facilement.</p>
                        </div>
                        <div className="card">
                            <h3>Plannings</h3>
                            <p>Créez et modifiez les plannings pour les moniteurs et les enfants.</p>
                        </div>
                        <div className="card">
                            <h3>Messagerie</h3>
                            <p>Communiquez en temps réel avec les parents et les moniteurs.</p>
                        </div>
                    </div>
                </section>
                <section className="cta">
                    <h2>Prêt à commencer ?</h2>
                    <p>Connectez-vous ou inscrivez votre centre dès aujourd'hui.</p>
                    <div className="cta-buttons">
                        <Button text="Se connecter" onClick={() => navigate('/login')} />
                        <Button text="S'inscrire" onClick={() => navigate('/register')} />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;