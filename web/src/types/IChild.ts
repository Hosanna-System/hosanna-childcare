import { Types } from "mongoose";


export interface IChild extends Document {
    name: string;
    age: number;
    profilePic?: string;
    parentId: Types.ObjectId;
    allergies?: string[];
    createdAt: Date;
    updatedAt: Date;
}
