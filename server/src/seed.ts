import mongoose from 'mongoose';
import ClassModel from './models/classModel';
import { connectToDatabase } from './config/db';

async function seed() {
    try {
        await connectToDatabase();
    } catch {
        console.log('failed to connect to database');
        process.exit(1);
    }
    

  // optional: clear existing data
  await ClassModel.deleteMany({});

  // define seed data
  const classes = [
    {
        id: 'COM SCI 1',
        name: 'Freshman Computer Science Seminar',
        units: 1,
        category: 'major',
        status: 'not started'
    },
    {
        id: 'COM SCI 31',
        name: 'Introduction to Computer Science I',
        units: 4,
        category: 'major',
        status: 'not started'
    },
  ];

  // insert seed data
  await ClassModel.insertMany(classes);
  console.log('seeded classes');

  await mongoose.disconnect();
  console.log('disconnected');
}

seed().catch(err => {
  console.error('seed error:', err);
  mongoose.disconnect();
});
