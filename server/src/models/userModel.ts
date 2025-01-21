import { ObjectId } from "mongodb";

// TEMP STRUCTURE IDK WHAT IT IS IN MONGO
export interface User {
    _id?: ObjectId; // generated by mongodb... are we using ObjectIds?
    name: string;
    email: string;
    age?: number;
}