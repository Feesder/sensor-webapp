import DeviceService from "../service/DeviceService.js"

class DeviceController {
    async create(req, res) {
        try {
            const device = await DeviceService.create(req.body);
            res.json(device);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async get(req, res) {
        let device;
        if(req.query.id) {
            device = await DeviceService.getOne(req.query.id);
        } else {
            device = await DeviceService.getAll();
        }
        return res.json(device);
    }
}

export default new DeviceController();