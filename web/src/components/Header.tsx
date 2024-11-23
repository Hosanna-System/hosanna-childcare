// Barre de navigation principale.
// Cette barre de navigation est affichée en haut de chaque page du site.
// ------------------------------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { UserState } from '../types/types';
import { logout } from '../store/userSlice';
import '../assets/styles/Header.css';


const Header: React.FC = () => {
    const user = useSelector<RootState, UserState>((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className="header">
            <Link to="/" className="logo">
                Hosanna Childcare
            </Link>
            <nav className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className="user-info">
                {user.isLoggedIn ? (
                    <>
                        <span className="username">{user.username}</span>
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </header>
    );
};

export default Header;