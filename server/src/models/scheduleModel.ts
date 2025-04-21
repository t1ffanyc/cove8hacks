import mongoose, { Document, Schema } from 'mongoose';

export interface ISchedule extends Document {
    temp: number
}

const userSchema: Schema<ISchedule> = new Schema({
    temp: {
        type: Number,
        required: true,
        trim: true,
    },
});

export const scheduleSchema = new Schema({
    temp: Number
});