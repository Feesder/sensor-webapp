import mongoose from "mongoose";

const Device = new mongoose.Schema(
    {
            userId: {type: String, required: true},
            active: {type: Boolean, required: false}
    }
);

export default mongoose.model("Device", Device);