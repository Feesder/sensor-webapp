import UserService from "../service/UserService.js";

class UserController {
    async add(req, res) {
        try {
            const data = await UserService.add(req.body);
            res.json(data);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async get(req, res) {
        try {
            let data;
            if(req.query.id) {
                data = await UserService.getOne(req.query.id);
            } else {
                data = await UserService.getAll();
            }
            return res.json(data);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async update(req, res) {
        try {
            const data = req.body();
            const updatedUser = await UserService.update(data);
            return res.json(updatedUser);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }
}

export default new UserController();