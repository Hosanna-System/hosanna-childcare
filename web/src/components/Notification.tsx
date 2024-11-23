// Pour afficher des messages de succès, erreur ou info.
// -------------------------------------------------------------------
import React from 'react';
import { Alert } from 'react-bootstrap';
import { useNotification } from '../contexts/notificationContext';
import '../assets/styles/Notification.css';

const Notification: React.FC = () => {
    const { notification, setNotification } = useNotification();

    if (!notification) return null;

    const handleClose = () => {
        setNotification(null);
    };

    return (
        <Alert variant={notification.type} onClose={handleClose} dismissible className="notification">
            {notification.message}
        </Alert>
    );
};

export default Notification;