import express, { Router } from "express";
import * as controller from "../controller/categoryController.js";

const router = express.Router();

router.post("/add-category", controller.createCategory);
router.post("/add-sub-category", controller.createSubCategory);


export default router;