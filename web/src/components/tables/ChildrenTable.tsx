// Tableau listant les enfants inscrits.
// ---------------------------------------------------------------
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllChildren } from '../../services/childrenEndpoints';
import { IChild } from '../../types/IChild';
import Loader from '../Loader';
import '../../assets/styles/ChildrenTable.css';

const ChildrenTable: React.FC = () => {
    const [children, setChildren] = useState<IChild[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchChildren = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const data = await getAllChildren(token);
                    setChildren(data);
                }
            } catch (error) {
                console.error('Error fetching children:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChildren();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <table className="children-table">
            <thead>
                <tr>
                    <th>Lastname</th>
                    <th>Firstname</th>
                    <th>Birthdate</th>
                    <th>Gender</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                {children.map((child) => (
                    <tr key={child.id.toString()}>
                        <td>{child.lastname}</td>
                        <td>{child.firstname}</td>
                        <td>{new Date(child.birthdate).toLocaleDateString()}</td>
                        <td>{child.gender}</td>
                        <td>{new Date(child.createdAt).toLocaleDateString()}</td>
                        <td>{new Date(child.updatedAt).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ChildrenTable;