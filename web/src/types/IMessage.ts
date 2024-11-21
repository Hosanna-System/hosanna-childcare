import { Types } from "mongoose";


export interface IMessage extends Document {
    senderId: Types.ObjectId;
    receiverId: Types.ObjectId;
    content: string;
    isRead: boolean;
    sentAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
