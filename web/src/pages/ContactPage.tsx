// ContactPage: ContactPage component
import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import '../assets/styles/ContactPage.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.tsx';
import Modal from '../components/Modal.tsx';
import { useState } from 'react';


const ContactPage = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="contact-container">
            <Header />
            <main className="contact-main">
                <section className="contact-form">
                    <h2>Contactez-nous</h2>
                    <form>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                        <Button text="Envoyer" onClick={() => setIsOpen(true)} />
                    </form>
                </section>
            </main>
            <Footer />
            <Modal
                isOpen={isOpen}
                title="Message envoyé"
                onClose={() => setIsOpen(false)}
            >
                <p>Votre message a bien été envoyé.</p>
            </Modal>
        </div>
    );
};

export default ContactPage;