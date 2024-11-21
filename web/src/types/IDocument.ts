import { Types } from "mongoose";


export interface IDocument extends Document {
    userId: Types.ObjectId;
    name: string;
    url: string;
    uploadDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
