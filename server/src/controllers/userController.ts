import { Response } from "express";
import { getAllUsersService, insertUserService, getUserService } from "../models/userService";
import logger from "../utils/logger";
import { AuthRequest } from "../utils/verifyJWT";
import { ICreateUser } from "../models/userModel";

// Get all users
export const getAllUsers = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const users = await getAllUsersService(); // get users

    logger.info(`Fetched ${users.length} users from the database`);
    res.status(200).json(users);
  } catch (error: unknown) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)

    logger.error(`Error fetching users: ${message}`);
    res.status(500).json({ error: message });
  }
};

// Create a new user
export const createUser = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const newUser: ICreateUser = req.body;
    const createdUser = await insertUserService(newUser);

    if(createdUser._id) {
        const userIdPreview = createdUser._id.toString().slice(0, 6); 
        logger.info(`Successfully created user with ID: ${userIdPreview}...`);
    }

    res.status(201).json(createdUser);
  } catch (error: unknown) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)

    logger.error(`Error creating user: ${message}`);
    res.status(500).json({ error: message });
  }
};

export const getUser = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if(!req.userId) {
      logger.error(`Error retrieving current user: no userId provided`);
      res.status(401).json(({ error: "No userId provided to call to get current user"}))
      return;
    }
    
    const user = await getUserService(req.userId); // get user

    logger.info(`Fetched user from the database`);
    res.status(200).json(user);
  } catch (error: unknown) {
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)

    logger.error(`Error fetching user: ${message}`);
    res.status(500).json({ error: message });
  }
}