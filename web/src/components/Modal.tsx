// Fenêtre modale réutilisable pour des confirmations ou des formulaires.
// -------------------------------------------------------------------

import React from 'react';
import '../assets/styles/Modal.css';

interface ModalProps {
    isOpen: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, children, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <button className="modal-close" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    {onConfirm && <button onClick={onConfirm}>Confirm</button>}
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;