import { Types } from "mongoose";


export interface IActivityReport extends Document {
    childId: Types.ObjectId;
    date: Date;
    description: string;
    photos?: string[];
    createdBy: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
