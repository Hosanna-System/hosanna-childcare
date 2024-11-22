// Liste des activités quotidiennes.
import React, { useEffect, useState } from 'react';
import { getActivities } from '../../services/activitiesEndpoints';
import { IActivity } from '../../types/IActivity';
import Loader from '../Loader';
import './ActivityList.css';

const ActivityList: React.FC = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const token = localStorage.getItem('token');
                const data = await getActivities(token);
                setActivities(data);
            } catch (error) {
                console.error('Error fetching activities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <table className="activity-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Created By</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
                {activities.map((activity) => (
                    <tr key={activity.id.toString()}>
                        <td>{activity.name}</td>
                        <td>{activity.description}</td>
                        <td>{activity.startTime}</td>
                        <td>{activity.endTime}</td>
                        <td>{activity.createdBy.toString()}</td>
                        <td>{new Date(activity.createdAt).toLocaleString()}</td>
                        <td>{new Date(activity.updatedAt).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ActivityList;