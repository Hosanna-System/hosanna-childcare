import { Types } from "mongoose";


export interface IChild extends Document {
    id:Types.ObjectId;
    firstname: string;
    lastname: string;
    gender: string;
    birthdate: Date;
    age: number;
    profilePic?: string;
    parentId: Types.ObjectId;
    allergies?: string[];
    createdAt: Date;
    updatedAt: Date;
}
