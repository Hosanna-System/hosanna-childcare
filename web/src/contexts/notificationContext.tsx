// context/notificationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Notification {
    message: string;
    type: 'success' | 'error' | 'info';
}

interface NotificationContextProps {
    notification: Notification | null;
    setNotification: (notification: Notification | null) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [notification, setNotification] = useState<Notification | null>(null);

    return (
        <NotificationContext.Provider value={{ notification, setNotification }}>
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