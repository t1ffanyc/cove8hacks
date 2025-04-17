import { Router } from "express";
import { deleteMe, getMe } from "../controllers/userController";
// import { getAllUsers, createUser } from "../controllers/userController";

const router: Router = Router();

// router.get("/", getAllUsers);
// router.post("/", createUser);
router.get('/me', getMe);
router.delete('/:id', deleteMe);

export default router;
