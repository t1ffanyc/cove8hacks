import mongoose, { Document, Schema } from 'mongoose';
import { ISchedule, scheduleSchema } from "../models/scheduleModel";

interface Plan {
  year1: Record<string, any>;
  year2: Record<string, any>;
  year3: Record<string, any>;
  year4: Record<string, any>;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    schedule: ISchedule;
    degreePlan: string;
    startYear: number;
    fourYearPlan: Plan;
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
    },
    degreePlan: { type: String, required: true },
    startYear: { type: Number, required: true },
    fourYearPlan: { type: Object, default: {} },
});

export default mongoose.model<IUser>('User', UserSchema);
