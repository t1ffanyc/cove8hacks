import mongoose, { Schema, Document } from "mongoose";

export interface IClass extends Document {
  id: string;
  name: string;
  units: number;
  category: string;
  status: string;
}

const classSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  units: { type: Number, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true }
});

export default mongoose.model<IClass>("ClassModel", classSchema);