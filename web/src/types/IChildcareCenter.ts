import { Types } from "mongoose";


export interface IChildcareCenter extends Document {
    name: string;
    address: string;
    email: string;
    phone: string;
    adminId: Types.ObjectId;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
