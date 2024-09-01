import { Job } from "../models/job.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      JobType,
      experienceLevel,
      position,
      companyId,
    } = req.body;

    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !JobType ||
      !experienceLevel ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements,
      salary,
      location,
      JobType,
      experienceLevel,
      position,
      company: companyId,
      created_by: userId,
    });

    return res.status(200).json({
      message: "New Job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAlljobs = async (req, res) => {
  try {
  } catch (error) {
    console.log(error)
  }
};
