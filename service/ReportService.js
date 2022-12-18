import Report from "../entity/Report.js"
import device from "../entity/Device.js";

class ReportService {
    async add(report) {
        return Report.create(report);
    }

    async getByDeviceId(deviceId) {
        if(!deviceId) {
            throw new Error("Id не указан")
        }
        return Report.find({ deviceId })
    }

    async getOne(id) {
        if(!id) {
            throw new Error("Id не указан")
        }
        return Report.findById(id);
    }

    async getAll() {
        return Report.find().sort({"date": -1});
    }
}

export default new ReportService();