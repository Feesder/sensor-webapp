import User from "../entity/User.js";

class UserService {
    async add(data) {
        return User.create(data);
    }

    async getAll() {
        return User.find();
    }

    async getOne(id) {
        if(!id) {
            throw new Error("Id не указан");
        }
        return User.findById(id);
    }

    async update(data) {
        if(!data._id) {
            throw new Error("Id не указан");
        }
        return User.findByIdAndUpdate(data._id, data, {new: true});
    }
}

export default new UserService();