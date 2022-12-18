import mongoose from "mongoose";

const Report = new mongoose.Schema(
    {
        deviceId: {type: String, required: true},
        temperature: {type: Number, required: true},
        gas: {type: Number, required: true},
        damp: {type: Number, required: true},
        date: {type: Date, default: Date.now(), required: true}
    }
);

export default mongoose.model("Report", Report);