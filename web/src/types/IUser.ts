import { Types } from "mongoose";


export interface IUser extends Document {
    id: Types.ObjectId;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    birthdate: Date;
    password: string;
    registrationDate: Date;
    reservationsCount: number;
    profilePicture?: string;
    role: "parent" | "monitor" | "admin" | "superadmin";
    childcareCenterId?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
