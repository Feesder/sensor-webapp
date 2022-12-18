import Router from "express";
import UserController from "../controller/UserController.js";

const router = new Router();

router.post("/user", UserController.add);
router.get("/user", UserController.get);
router.put("/user", UserController.update);

export default router;