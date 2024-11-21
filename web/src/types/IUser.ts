import { Types } from "mongoose";


export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    profilePicture?: string;
    role: "parent" | "monitor" | "admin" | "superadmin";
    childcareCenterId?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
