import mongoose, { Document, Schema } from 'mongoose';
import { ISchedule, scheduleSchema } from "../models/scheduleModel";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    schedule: ISchedule;
}

const UserSchema = new Schema<IUser>({
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
    password: { 
      type: String, 
      required: true 
    },
    schedule: {
        type: scheduleSchema,
        required: true,
    }
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
