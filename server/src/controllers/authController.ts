/* AUTHENTICATION LOGIC */
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel";
import logger from "../utils/logger";

// token secrets
const AT_SECRET = process.env.ACCESS_TOKEN_SECRET!;
const RT_SECRET = process.env.REFRESH_TOKEN_SECRET!;

// lifetimes
const AT_EXPIRES = "15m";
const RT_EXPIRES = "7d";

// signup endpoint
export const signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ message: "Missing fields" });
        return;
    }

    if (await User.findOne({ email })) {
        res.status(409).json({ message: "Email already in use" });
        return;
    }

    // hash password and store new user
    const hash = await bcrypt.hash(password, 10);
    await new User({ name, email, password: hash }).save();
    logger.debug('User successfully created');
    res.status(201).json({ message: "User created" });
};

export const signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Missing fields" });
        return;
    }

    // check against user from database
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
    }

    // provide new access and refresh tokens
    const accessToken = jwt.sign({ sub: user._id }, AT_SECRET, {
        expiresIn: AT_EXPIRES,
    });
    const refreshToken = jwt.sign({ sub: user._id }, RT_SECRET, {
        expiresIn: RT_EXPIRES,
    });

    // send access and refresh token in cookies to client
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    })  
        .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        })
        .json({ message: "Logged in" });
    logger.debug('User successfully signed in');
};

// refresh the user's access token, checking if their refresh token is valid
export const refreshToken = (req: Request, res: Response) => {
    const token = req.cookies.refreshToken;
    logger.warn('user refreshing token');
    if (!token) {
        res.status(204).json({ message: "No refresh token, likely not logged in." });
        return;
    }

    try {
        const { sub } = jwt.verify(token, RT_SECRET) as jwt.JwtPayload;
        const newAT = jwt.sign({ sub }, AT_SECRET, { expiresIn: AT_EXPIRES });

        res.cookie("accessToken", newAT, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        }).json({ message: "Access token refreshed" });

        logger.debug('Successfully refreshed access token');
    } catch {
        res.status(403).json({ message: "Invalid refresh token" });
    }
};

// clear tokens on signout
export const signout = (req: Request, res: Response) => {
    res.clearCookie("accessToken")
        .clearCookie("refreshToken")
        .json({ message: "Signed out" });
};
