import express from "express";
import { registerCompany, getCompany, getCompanyById, UpdateCompany } from "../controllers/company.controller.js";

import isAuth from "../middlewares/isAuth.js";

const router = express.Router();

router.route("/register").post(isAuth, registerCompany);
router.route("/get").get(isAuth, getCompany);
router.route("/get/:id").get(isAuth, getCompanyById);
router.route("/update/:id").put(isAuth, UpdateCompany);

export default router;
