import { Types } from "mongoose";


export interface IAbsence extends Document {
    childId: Types.ObjectId;
    startDate: Date;
    endDate: Date;
    reason: string;
    createdAt: Date;
    updatedAt: Date;
}
