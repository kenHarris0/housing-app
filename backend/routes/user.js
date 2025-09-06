import express from 'express';
const router = express.Router();
import userController from "../controllers/userController.js"

router.get("/getUsers", userController.user_get);
router.post("/login", userController.user_login);
router.post("/signup", userController.user_signup);

export default router;