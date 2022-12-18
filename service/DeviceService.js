import Device from "../entity/Device.js"

class DeviceService {
    async create(device) {
        return Device.create(device);
    }

    async getOne(id) {
        if(!id) {
            throw new Error("Id не указан");
        }
        return Device.findById(id);
    }

    async getAll() {
        return Device.find();
    }
}

export default new DeviceService();