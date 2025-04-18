import User, { ICreateUser, IUser } from "../models/userModel";
import logger from "../utils/logger";

// Get all users from the database
export const getAllUsersService = async (): Promise<IUser[]> => {
    try {
        // .exec() returns a true Promise
        return await User.find().exec();
    } catch (err) {
        logger.error("Error fetching users:", err);
        throw new Error("Could not retrieve users");
    }
};

// insert new user
export const insertUserService = async (
    newUserData: ICreateUser
): Promise<IUser> => {
    try {
        logger.debug(
            `Inserting new user into the database: ${JSON.stringify(
                newUserData
            )}`
        );
        const user = new User(newUserData);
        return await user.save();
    } catch (err: any) {
        logger.error("Error inserting user:", err);
        // you can inspect err.code for duplicate‐key (11000) etc.
        throw new Error(err.message || "Could not insert user");
    }
};

// get a user by their id
export const getUserService = async (userId: string): Promise<IUser | null> => {
    try {
        return await User.findById(userId).exec();
    } catch (err) {
        logger.error(`Error fetching user with id ${userId}:`, err);
        throw new Error("Could not retrieve user");
    }
};
