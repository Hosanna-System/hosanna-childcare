import { Types } from "mongoose";


export interface INotification {
    id: Types.ObjectId | string;
    userId: Types.ObjectId;
    message: string;
    type: 'success' | 'error' | 'info' | 'alert' | 'reminder';
    read: boolean;
    createdAt: Date;
    updatedAt: Date;
}
