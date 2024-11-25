// context/notificationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { INotification } from '../types/INotification';

interface Notification {
    message: string;
    type: 'success' | 'error' | 'info' | 'alert' | 'reminder';
}

interface NotificationContextProps {
    notifications: INotification[];
    notification: Notification | null;
    setNotification: (notification: Notification | null) => void;
    addNotification: (notification: INotification) => void;
    removeNotification: (id: string) => void;
    showNotification: (notification: INotification) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [notification, setNotification] = useState<Notification | null>(null);
    const [notifications, setNotifications] = useState<INotification[]>([]);

    const addNotification = (notification: INotification) => {
        setNotifications((prevNotifications) => [...prevNotifications, notification]);
    };

    const removeNotification = (id: string) => {
        setNotifications((prevNotifications) => prevNotifications.filter((n) => n.id.toString() !== id));
    };

    const showNotification = (notification: INotification) => {
        setNotification(notification);
        addNotification(notification);
    };

    return (
        <NotificationContext.Provider value={{ notifications, notification, setNotification, addNotification, removeNotification, showNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = (): NotificationContextProps => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};