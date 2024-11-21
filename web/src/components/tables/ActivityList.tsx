// Liste des activités quotidiennes.
import React from 'react';
import { IActivity } from '../../types/IActivity';


interface ActivityListProps {
    activities: IActivity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
    return (
        <div>
            <h2>Activités</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activité</th>
                        <th>Temps</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity, index) => (
                        <tr key={index}>
                            <td>{activity.startTime}</td>
                            <td>{activity.name}</td>
                            <td>{new Date(activity.endTime).getTime() - new Date(activity.startTime).getTime()} min</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ActivityList;