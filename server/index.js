
//#region | Import Stuff
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import http from "http";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

//#endregion

//#region | Middleware Moment
const app = express();

app.use(cors({ origin: ["http://10.65.1.237:5173", "http://localhost:5173"], credentials: true }));
app.use(cookieParser());
app.use(express.json());
// app.use(express.static("public"));

import signupRoutes from "./routes/signup.js";

app.use("/api", signupRoutes);
//#endregion

//#region | MongoDB
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI)
    .then((ok) => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });
//#endregion

//#region | Final steps

// app.get("*", cors(), (_, res)=>{
//     res.sendFile(path.join(__dirname, "public"));
// });

app.get("/api/*", cors(), (_, res)=>{
    res.sendStatus(404);
})

http.createServer(app).listen(process.env.PORT ?? 8080);
//#endregion
