import express from "express";
import { login, register, updateProfile } from "../controllers/user.controller";
import isAuth from "../middlewares/isAuth";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuth, updateProfile);

export default router;
