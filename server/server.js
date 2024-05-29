import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import adminRouter from "./Routes/Admin.js";
import carPostRouter from "./Routes/CarPost.js";
import cors from "cors";
import { mongodbConnection } from "./Config/DonnectionDb.js";

const app = express();

// Configuring DOTENV
dotenv.config({ path: "../server/Config/config.env" });

// Mongo DB

mongodbConnection();

// Configuring Cookie-Parser
app.use(cookieParser());

// Configuring Body-Parser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5000",
];
=======
app.use(
  cors({
    origin: "*", // Adjust this to your allowed origins
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Origin, Content-Type, Accept, Authorization",
    credentials: true,
  })
);
>>>>>>> f425b4007069344184de87a8eba651bd58614ea3
// Using CORS
app.use(cors({ origin: allowedOrigins, credentials: true }));

// API Routes

app.use("/api/admin", adminRouter);
app.use("/api", carPostRouter);
app.use(express.static("public"));
// Listening App
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is Running on PORT : ${port}`);
});
