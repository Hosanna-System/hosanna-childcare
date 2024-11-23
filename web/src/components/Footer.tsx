// Pied de page commun à toutes les pages.
// -------------------------------------------------------------------
import React from 'react';
import '../assets/styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Hosanna Childcare. All rights reserved.</p>
            <p>
                <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
            </p>
        </div>
    );
};

export default Footer;
