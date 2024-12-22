import { getClient } from "../config/db";
import { User } from "../models/userModel";
import logger from "../utils/logger";

const DB_NAME = process.env.DB_NAME || "cove8hacks"; // default value for now
if (!DB_NAME) {
throw new Error("DB_NAME is not defined in .env file");
}

// Get all users from the data  base
export const getAllUsersService = async (): Promise<User[]> => {
    // get user collection
    let client = getClient();
    if(!client) {
        logger.error("Mongo client is not connected, unable to access database.");
        throw new Error("Mongo client not connected.");
    }
    const usersCollection = client.db(DB_NAME).collection<User>("users");

    // find all users
    return await usersCollection.find().toArray();
};

// Insert a new user into the database
export const insertUserService = async (newUser: User): Promise<User> => {
    logger.debug(`Inserting new user into the database: ${JSON.stringify(newUser)}`);

    // get user collection
    let client = getClient();
    if(!client) {
        logger.error("Mongo client is not connected, unable to access database.");
        throw new Error("Mongo client not connected.");
    }
    const usersCollection = client.db(DB_NAME).collection<User>("users");

    // insert new user
    const result = await usersCollection.insertOne(newUser);

    // get inserted user to return? not necessary if we want to be quicker
    const insertedUser = await usersCollection.findOne({ _id: result.insertedId });
    if (!insertedUser) {
        logger.error("After successful insertion, failed to retrieve the inserted user");
        throw new Error("User successfully inserted, but failed to retrieve the newly inserted user");
    }
    return insertedUser;; // Return the created user
}