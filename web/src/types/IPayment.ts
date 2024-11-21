import { Types } from "mongoose";


export interface IPayment extends Document {
    userId: Types.ObjectId;
    amount: number;
    method: "credit_card" | "paypal" | "bank_transfer";
    status: "pending" | "completed" | "failed";
    paymentDate: Date;
    details?: string;
    createdAt: Date;
    updatedAt: Date;
}
