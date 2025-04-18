import { Router } from 'express';
import { signin, signup, refreshToken, signout } from '../controllers/authController';

const router = Router();

router.post('/signup', signup)
router.post('/signin', signin);
router.post('/refresh-token', refreshToken);
router.post('/signout', signout);

export default router;
