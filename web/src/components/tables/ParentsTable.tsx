// Tableau listant les parents.
// Ce composant est utilisé dans la page ParentsList.
// Il est connecté à Redux pour lire les parents dans le store.
// -------------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../types/IUser';
import '../../assets/styles/ParentsTable.css';
import { Types } from 'mongoose';
import { getUsers, deleteUser } from '../../services/userEndpoints'; // Adjust the import path as necessary
import { useState, useEffect } from 'react';

const ParentsTable: React.FC = () => {
    const [parents, setParents] = useState<IUser[]>([]);
    const [sortConfig, setSortConfig] = useState<{ key: string, direction: string } | null>(null);

    useEffect(() => {
        const fetchParents = async () => {
            try {
                const token = localStorage.getItem('token'); // Adjust token retrieval as necessary
                if (token) {
                    const users = await getUsers(token);
                    setParents(users.filter((user: IUser) => user.role === 'parent'));
                }
            } catch (error) {
                console.error('Failed to fetch parents:', error);
            }
        };

        fetchParents();
    }, []);

    const sortParents = (key: string) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
        setParents((prevParents) => {
            return [...prevParents].sort((a, b) => {
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

    const deleteParent = async (id: Types.ObjectId) => {
        try {
            const token = localStorage.getItem('token'); // Adjust token retrieval as necessary
            if (token) {
                await deleteUser(id.toString(), token);
                setParents(parents.filter((parent) => !parent.id.equals(id)));
            }
        } catch (error) {
            console.error('Failed to delete parent:', error);
        }
    };

    return (
        <table className="parents-table">
            <thead>
                <tr>
                    <th onClick={() => sortParents('lastname')}>Lastname</th>
                    <th onClick={() => sortParents('firstname')}>Firstname</th>
                    <th onClick={() => sortParents('email')}>Email</th>
                    <th onClick={() => sortParents('phone')}>Phone</th>
                    <th onClick={() => sortParents('birthdate')}>Birthdate</th>
                    <th onClick={() => sortParents('registrationDate')}>Registration Date</th>
                    <th onClick={() => sortParents('reservationsCount')}>Reservations Count</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {parents.map((parent) => (
                    <tr key={parent.id.toString()}>
                        <td>{parent.lastname}</td>
                        <td>{parent.firstname}</td>
                        <td>{parent.email}</td>
                        <td>{parent.phone}</td>
                        <td>{new Date(parent.birthdate).toLocaleDateString()}</td>
                        <td>{new Date(parent.registrationDate).toLocaleDateString()}</td>
                        <td>{parent.reservationsCount}</td>
                        <td className="action-buttons">
                            <Link to={`/edit-parent/${parent.id}`} className="edit-button">Edit</Link>
                            <button onClick={() => deleteParent(parent.id)} className="delete-button">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ParentsTable;