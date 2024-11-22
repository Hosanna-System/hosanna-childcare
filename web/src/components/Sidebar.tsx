// Menu latéral, affiché selon le rôle (SuperAdmin, Admin, Moniteur, Parent).
// -------------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { useAuth } from '../contexts/AuthContext';
import { useSidebar } from '../contexts/SidebarContext';
import { IconContext } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

const items = [
    { path: '/', title: 'Home', icon: <FaHome />, roles: ['SuperAdmin', 'Admin', 'Moniteur', 'Parent'] },
    { path: '/profile', title: 'Profile', icon: <FaUser />, roles: ['SuperAdmin', 'Admin', 'Moniteur', 'Parent'] },
    { path: '/transport', title: 'Transport', icon: <FaCar />, roles: ['SuperAdmin', 'Admin', 'Moniteur'] },
    { path: '/calendar', title: 'Calendar', icon: <FaCalendarAlt />, roles: ['SuperAdmin', 'Admin', 'Moniteur', 'Parent'] },
];

const Sidebar: React.FC = () => {
    const { user, logout } = useAuth();
    const { isOpen, toggleSidebar } = useSidebar();

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="menu-icon" onClick={toggleSidebar}>
                <FaBars />
            </div>
            <nav className={isOpen ? 'sidebar active' : 'sidebar'}>
                <div className="close-icon" onClick={toggleSidebar}>
                    <FaTimes />
                </div>
                <ul>
                    {items.map((item, index) => {
                        if (item.roles.includes(user.role)) {
                            return (
                                <li key={index}>
                                    <Link to={item.path}>
                                        <div className="icon">{item.icon}</div>
                                        <div className="title">{item.title}</div>
                                    </Link>
                                </li>
                            );
                        }
                        return null;
                    })}
                    <li>
                        <div className="icon" onClick={logout}>
                            <FaSignOutAlt />
                        </div>
                        <div className="title" onClick={logout}>Logout</div>
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
    );
};

export default Sidebar;