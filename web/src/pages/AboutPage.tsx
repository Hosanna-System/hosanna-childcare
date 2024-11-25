// Apropos: About page
import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import '../assets/styles/About.css';

const AboutPage = () => {
    return (
        <div className="about-container">
            <Header />
            <main className="about-main">
                <section className="about-content">
                    <h2>À propos de nous</h2>
                    <p>Notre mission est de faciliter la gestion des centres de loisirs et de rendre la communication entre les parents, les enfants et les moniteurs plus simple et plus efficace.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;