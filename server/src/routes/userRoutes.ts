import { Router } from "express";
import { getAllUsers, createUser, getUser } from "../controllers/userController";

const router: Router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/me", getUser);

export default router;
