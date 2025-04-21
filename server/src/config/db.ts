import mongoose from 'mongoose';
import logger from '../utils/logger';
import dotenv from 'dotenv';

dotenv.config();

const CONNECTION_TIMEOUT = 10000;

export const connectToDatabase = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI is not defined in .env');

    const connectPromise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: CONNECTION_TIMEOUT,
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('MongoDB connection timeout')), CONNECTION_TIMEOUT)
    );

    await Promise.race([connectPromise, timeoutPromise]);
    logger.info('Connected to MongoDB via Mongoose');
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    logger.error(`Mongoose connection failed: ${message}`);
    throw new Error(message);
  }
};

import { MongoClient } from "mongodb";
// import logger from "../utils/logger";

// const CONNECTION_TIMEOUT = 10000; // 10 seconds timeout for db connection
// let client: MongoClient;

// export const connectToDatabase = async (): Promise<void> => {
//   try {
//     // connect to mongo client
//     const uri = process.env.MONGO_URI;
//     if (!uri) {
//     throw new Error("MONGO_URI is not defined in .env file");
//     }
//     client = new MongoClient(uri);

//     const connectPromise = client.connect(); // Create promise for connection
//     const timeoutPromise = new Promise((_, reject) =>
//     setTimeout(() => reject(new Error('MongoDB connection timeout')), CONNECTION_TIMEOUT)
//     ); // Create a timeout promise

//     // wait for either the connection or the timeout to occur
//     await Promise.race([connectPromise, timeoutPromise]);
    
//     logger.info("Connected to MongoDB");
//   } catch (error: unknown) {
//     // validate error
//     let message
// 	if (error instanceof Error) message = error.message
// 	else message = String(error)

//     //log it
//     logger.error(`Database connection failed: ${message}`);
//     throw new Error(`Database connection failed: ${message}`);
//   }
// };

// // retrieve the MongoDB client after it's connected
// export const getClient = (): MongoClient | null => {
//     if (!client) {
//       logger.error("MongoDB client is not connected.");
//       return null;
//     }
//     return client;
//   };