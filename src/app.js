import express from "express";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import categoryRouter from "./routes/category";
import uploadImageRouter from "./routes/uploadImage";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const corsOptions = {
  origin: "http://127.0.0.1:5173",
};
app.use(cors(corsOptions));
// middleware
app.use(express.json());
app.use(cors());

// router
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);
app.use("/api", uploadImageRouter);
mongoose.connect("mongodb://127.0.0.1:27017/we17301");

export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// Tạo file vite.config.js ở root -> clone github của thầy
// truy cập file app.js thêm cuối file -> export const viteNodeApp = app;
// Truy cập file package.json, sửa lại script -> npm run dev
