import { Response } from "express";
import { getAllUsersService, insertUserService, deleteUserService } from "../models/userService";
import User from "../models/userModel";
import logger from "../utils/logger";
import { AuthRequest } from "../utils/verifyJWT";

/* TEMP */
export const getMe = async (req: AuthRequest, res: Response) => {
  const user = await User.findById(req.userId).select('-password');
  res.json(user);
};

export const deleteMe = async (req: AuthRequest, res: Response) => {
  if (req.userId !== req.params.id) {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  await User.findByIdAndDelete(req.params.id);
  res.clearCookie('accessToken').clearCookie('refreshToken');
  res.json({ message: 'User deleted' });
};

// // Get all users
// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const users = await getAllUsersService(); // get users

//     logger.info(`Fetched ${users.length} users from the database`);
//     res.status(200).json(users);
//   } catch (error: unknown) {
//     let message
//     if (error instanceof Error) message = error.message
//     else message = String(error)

//     logger.error(`Error fetching users: ${message}`);
//     res.status(500).json({ error: message });
//   }
// };

// // Create a new user
// export const createUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const newUser: User = req.body;
//     const createdUser = await insertUserService(newUser);

//     if(createdUser._id) {
//         const userIdPreview = createdUser._id.toString().slice(0, 6); 
//         logger.info(`Successfully created user with ID: ${userIdPreview}...`);
//     }

//     res.status(201).json(createdUser);
//   } catch (error: unknown) {
//     let message
//     if (error instanceof Error) message = error.message
//     else message = String(error)

//     logger.error(`Error creating user: ${message}`);
//     res.status(500).json({ error: message });
//   }
// };

// // Delete a user
// export const deleteUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const user: User = req.body;
//     await deleteUserService(user);

//     res.status(200);
//   } catch (error: unknown) {
//     let message
//     if (error instanceof Error) message = error.message
//     else message = String(error)

//     logger.error(`Error deleting user: ${message}`);
//     res.status(500).json({ error: message });
//   }
// };