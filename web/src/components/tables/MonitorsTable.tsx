import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../types/IUser';
import '../../assets/styles/MonitorsTable.css';
import { Types } from 'mongoose';
import { getUsers, deleteUser } from '../../services/userEndpoints'; // Adjust the import path as necessary

const MonitorsTable: React.FC = () => {
    const [monitors, setMonitors] = useState<IUser[]>([]);
    const [sortConfig, setSortConfig] = useState<{ key: string, direction: string } | null>(null);

    useEffect(() => {
        const fetchMonitors = async () => {
            try {
                const token = localStorage.getItem('token'); // Adjust token retrieval as necessary
                if (token) {
                    const users = await getUsers(token);
                    setMonitors(users.filter((user: IUser) => user.role === 'monitor'));
                }
            } catch (error) {
                console.error('Failed to fetch monitors:', error);
            }
        };

        fetchMonitors();
    }, []);

    const sortMonitors = (key: string) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
        setMonitors((prevMonitors) => {
            return [...prevMonitors].sort((a, b) => {
                if (a[key] < b[key]) {
                    return direction === 'ascending' ? -1 : 1;
                }
                if (a[key] > b[key]) {
                    return direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        });
    };

    const deleteMonitor = async (id: Types.ObjectId) => {
        try {
            const token = localStorage.getItem('token'); // Adjust token retrieval as necessary
            if (token) {
                await deleteUser(id.toString(), token);
                setMonitors(monitors.filter((monitor) => !monitor.id.equals(id)));
            }
        } catch (error) {
            console.error('Failed to delete monitor:', error);
        }
    };

    return (
        <table className="monitors-table">
            <thead>
                <tr>
                    <th onClick={() => sortMonitors('lastname')}>Lastname</th>
                    <th onClick={() => sortMonitors('firstname')}>Firstname</th>
                    <th onClick={() => sortMonitors('email')}>Email</th>
                    <th onClick={() => sortMonitors('phone')}>Phone</th>
                    <th onClick={() => sortMonitors('birthdate')}>Birthdate</th>
                    <th onClick={() => sortMonitors('registrationDate')}>Registration Date</th>
                    <th onClick={() => sortMonitors('reservationsCount')}>Reservations Count</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {monitors.map((monitor) => (
                    <tr key={monitor.id.toString()}>
                        <td>{monitor.lastname}</td>
                        <td>{monitor.firstname}</td>
                        <td>{monitor.email}</td>
                        <td>{monitor.phone}</td>
                        <td>{new Date(monitor.birthdate).toLocaleDateString()}</td>
                        <td>{new Date(monitor.registrationDate).toLocaleDateString()}</td>
                        <td>{monitor.reservationsCount}</td>
                        <td className="action-buttons">
                            <Link to={`/edit-monitor/${monitor.id}`} className="edit-button">Edit</Link>
                            <button onClick={() => deleteMonitor(monitor.id)} className="delete-button">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MonitorsTable;
