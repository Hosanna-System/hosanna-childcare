import { Types } from 'mongoose';

export interface IService {
    id: number
    name: string;
    description: string;
    providers: Types.ObjectId[];
    reviews: string[];
}