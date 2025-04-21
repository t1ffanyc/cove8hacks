import mongoose, { Document, Schema } from 'mongoose';
import { ISchedule, scheduleSchema } from "../models/scheduleModel";

export interface IUser extends Document {
    name: string;
    email: string;
    schedule: ISchedule;
}

const userSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    schedule: {
        type: scheduleSchema,
        required: true,
    }
});

const UserModel = mongoose.model<IUser>('User', userSchema);
export default UserModel;