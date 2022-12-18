import Router from "express";
import ReportController from "../controller/ReportController.js";

const router = new Router();

router.post("/report", ReportController.add);
router.get("/report", ReportController.get);

export default router;