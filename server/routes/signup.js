import express from "express";
import SignupController from "../controllers/SignupController.js";

const router = express.Router();

router.post("/signup", SignupController.signup);

export default router;