import mongoose, { Schema, Document } from "mongoose";

interface Plan {
  year1: Record<string, any>;
  year2: Record<string, any>;
  year3: Record<string, any>;
  year4: Record<string, any>;
}

export interface IUser extends Document {
  name: string;
  email: string;
  degreePlan: string;
  startYear: number;
  fourYearPlan: Plan;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  degreePlan: { type: String, required: true },
  startYear: { type: Number, required: true },
  fourYearPlan: { type: Object, default: {} },
});

export default mongoose.model<IUser>("User", UserSchema);