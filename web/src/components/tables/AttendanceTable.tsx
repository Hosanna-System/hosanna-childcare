// Tableau pour la gestion de la présence.
import React, { useEffect, useState } from 'react';
import { getAllAbsences } from '../../services/absencesEndpoints';
import { getChildById, getAllChildren } from '../../services/childrenEndpoints';
import { IAbsence } from '../../types/IAbsence';
import { IChild } from '../../types/IChild';
import Loader from '../Loader';
import './AttendanceTable.css';

const AttendanceTable: React.FC = () => {
    const [absences, setAbsences] = useState<IAbsence[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [children, setChildren] = useState<IChild[]>([]);

    useEffect(() => {
        const fetchAbsences = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const data = await getAllAbsences(token);
                    setAbsences(data);
                }
            } catch (error) {
                console.error('Error fetching absences:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchChildren = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const data = await getAllChildren(token);
                    setChildren(data);
                }
            } catch (error) {
                console.error('Error fetching children:', error);
            }
        };

        fetchAbsences();
        fetchChildren();
    }, []);

    const getChildName = (childId: string) => {
        const child = children.find((child) => child.id.toString() === childId);
        return child ? `${child.lastname} ${child.firstname}` : '';
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <table className="attendance-table">
            <thead>
                <tr>
                    <th>Child Lastname & Firstname</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Reason</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                {absences.map((absence) => (
                    <tr key={absence.childId.toString()}>
                        <td>{getChildName(absence.childId.toString())}</td>
                        <td>{new Date(absence.startDate).toLocaleDateString()}</td>
                        <td>{new Date(absence.endDate).toLocaleDateString()}</td>
                        <td>{absence.reason}</td>
                        <td>{new Date(absence.createdAt).toLocaleDateString()}</td>
                        <td>{new Date(absence.updatedAt).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AttendanceTable;