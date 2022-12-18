import ReportService from "../service/ReportService.js";

class ReportController {
    async add(req, res) {
        try {
            const report = await ReportService.add(req.body);
            res.json(report);
        } catch(e) {
            res.status(500);
        }
    }

    async get(req, res) {
        try {
            let report;
            if(req.query.deviceId) {
                if(req.query.temperature && req.query.gas && req.query.damp) {
                    report = ReportService.add(req.query)
                    return res.json(report);
                }
                report = await ReportService.getByDeviceId(req.query.deviceId);
            } else if(req.query.id) {
                report = await ReportService.getOne(req.query.id);
            } else {
                report = await ReportService.getAll();
            }
            return res.json(report);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }
}

export default new ReportController();