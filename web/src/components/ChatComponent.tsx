import React, { useEffect, useState } from 'react';
import socket from '../socket';
import { createMessage, getMessagesForUser } from '../services/messageEndpoints';
import { IMessage } from '../types/IMessage';

const ChatComponent: React.FC<{ userId: string; token: string }> = ({ userId, token }) => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Récupérer les messages pour l'utilisateur
        const fetchMessages = async () => {
            const fetchedMessages = await getMessagesForUser(userId, token);
            setMessages(fetchedMessages);
        };

        fetchMessages();

        // Écouter les messages entrants
        socket.on('message', (data: IMessage) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        // Nettoyer l'écouteur lors du démontage du composant
        return () => {
            socket.off('message');
        };
    }, [userId, token]);

    const sendMessage = async () => {
        if (message.trim()) {
            // Envoyer un message via Socket.IO
            socket.emit('message', { content: message, senderId: userId });

            // Sauvegarder le message dans la base de données
            await createMessage({ content: message, senderId: userId, receiverId: '', isRead: false, sentAt: new Date(), createdAt: new Date(), updatedAt: new Date() }, token);

            setMessage('');
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg.content}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Envoyer</button>
        </div>
    );
};

export default ChatComponent;