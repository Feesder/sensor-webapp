import express from "express";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import deviceRouter from "./router/deviceRouter.js";
import reportRouter from "./router/reportRouter.js";

const app = express();

const PORT = 5000;
const DB_URL = "mongodb+srv://feesder:125125eraA@cluster0.ifh8tv3.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use('/', userRouter);
app.use('/', deviceRouter);
app.use('/', reportRouter);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT);
        });
    } catch(e) {
        console.log(e);
    }
}

startApp();