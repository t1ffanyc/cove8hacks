import mongoose, { Schema, Document } from "mongoose";

export interface IDegreeRequirement extends Document {
  name: string;
  requirements: {
    premajor: string[];
    major: string[];
    ge: {
        AH: {   //foundations of the arts and humanities
            requiredUnits: number; options: string[]
        };
        SC: {   //foundations of society and culture
            requiredUnits: number; options: string[]
        };
        SI: {   //foundations of scientific inquiry
            requiredUnits: number; options: string[]
        };
    };
    electives: { requiredUnits: number; options: string[] };
  };
}

const DegreeRequirementSchema: Schema = new Schema({
  name: { type: String, required: true },
  requirements: {
    premajor: { type: [String], default: [] },
    major: { type: [String], default: [] },
    ge: { 
        AH: {
            requiredUnits: { type: Number, default: 0 },
            options: { type: [String], default: [] },
        },
        SC: {
            requiredUnits: { type: Number, default: 0 },
            options: { type: [String], default: [] },
        },
        SI: {
            requiredUnits: { type: Number, default: 0 },
            options: { type: [String], default: [] },
        }
    },
    electives: {
      requiredUnits: { type: Number, default: 0 },
      options: { type: [String], default: [] },
    },
  },
});

export default mongoose.model<DegreeRequirement>("DegreeRequirement", DegreeRequirementSchema);
