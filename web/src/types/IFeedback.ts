import { Types } from "mongoose";


export interface IFeedback extends Document {
    userId: Types.ObjectId;
    message: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}
