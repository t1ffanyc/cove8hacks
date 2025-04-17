import { Request, Response } from "express";
import { getAllUsersService, insertUserService, getUserService } from "../models/userService";
import { IUser } from "../models/userModel";
import logger from "../utils/logger";
import { AuthRequest } from "../utils/verifyJWT";

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser: IUser = req.body;
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

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await getUserService(req.body); // get user

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
