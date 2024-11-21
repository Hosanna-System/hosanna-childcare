import { Document, Types } from "mongoose";


export interface ISchedule extends Document {
    childId: Types.ObjectId;
    date: Date;
    startTime: string;
    endTime: string;
    activity?: string;
    createdAt: Date;
    updatedAt: Date;
}