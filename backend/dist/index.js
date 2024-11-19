import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import orderRouter from "./routes/message.routes.js";
import { getWebhook, verifyWebhook } from "./controller/webhook.controller.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
app.get("/test", (_, res) => {
    res.send("Test route hit.");
});
app.get("/webhook", verifyWebhook);
app.post("/webhook", getWebhook);
app.use("/message", orderRouter);
export default app;
