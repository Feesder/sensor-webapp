import Router from 'express';
import DeviceController from '../controller/DeviceController.js'

const router = new Router();

router.post("/device", DeviceController.create);
router.get("/device", DeviceController.get);
router.put("/device");

export default router;