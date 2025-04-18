import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import logger from './logger';

export interface AuthRequest extends Request {
  userId?: string;
}

export default function verifyJWT(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.accessToken;
  if (!token) {
    logger.debug('No access token found when verifying JWT')
    res.status(401).json({ message: 'No access token' });
    return;
  }

  try {
    const { sub } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as jwt.JwtPayload;
    req.userId = sub as string;
    logger.debug('Successfully verified JWT token');
    next();
  } catch {
    res.status(403).json({ message: 'Invalid access token' });
  }
}
