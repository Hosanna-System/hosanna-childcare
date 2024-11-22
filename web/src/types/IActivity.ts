import { Types } from "mongoose";


export interface IActivity extends Document {
    id: Types.ObjectId;
    name: string;
    description?: string;
    startTime: string;
    endTime: string;
    createdBy: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
