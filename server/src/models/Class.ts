import mongoose, { Schema, Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IClass extends Document {
  name: string;
  id: string;
  units: number;
  category: string;
  status: string;
}

const ClassSchema: Schema = new Schema({
  name: { type: String, required: true },
  id: { type: ObjectId, required: true, unique: true },
  units: { type: Number, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true }
});

export default mongoose.model<IClass>("Class", ClassSchema);
