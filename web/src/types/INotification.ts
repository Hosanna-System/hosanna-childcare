import { Types } from "mongoose";


export interface INotification extends Document {
    userId: Types.ObjectId;
    message: string;
    type: "info" | "alert" | "reminder";
    read: boolean;
    createdAt: Date;
    updatedAt: Date;
}
