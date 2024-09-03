import express from "express";
import {
  postJob,
  getAlljobs,
  getJobById,
  getAdminJobs,
} from "../controllers/job.controller.js";
import isAuth from "../middlewares/isAuth.js";

const router = express.Router();

router.route("/post").post(isAuth, postJob);
router.route("/get").get(isAuth, getAlljobs);
router.route("/getadminjobs").get(isAuth, getAdminJobs);
router.route("/get/:id").get(isAuth, getJobById);

export default router;
