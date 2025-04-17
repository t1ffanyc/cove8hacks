import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
dotenv.config({ path: path.resolve(__dirname, "../../.env") }); // setup env variables first... cuz imports need them too
import logger from "./utils/logger";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import verifyJWT from "./utils/verifyJWT";

if (!process.env.MONGO_URI) {
    logger.error("Missing Mongo URI");
    process.exit(1);
}
if (!process.env.ACCESS_TOKEN_SECRET) {
    logger.error("Missing Access Token Secret");
    process.exit(1);
}
if (!process.env.REFRESH_TOKEN_SECRET) {
    logger.error("Missing Refresh Token Secret");
    process.exit(1);
}




// set up express app
const PORT = process.env.PORT || 4000;
const app: Application = express();
app.use(express.json()); // middleware for JSON parsing
app.use(express.urlencoded({ extended: true })); // middleware for URL parsing
app.use(cookieParser()); // parse JWT cookies
app.use(
    cors({
        origin: "http://localhost:3000", // wherever our frontend is running from
        credentials: true,
    })
);

// connect to database
mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => logger.info("Mongo Database connected"))
    .catch((err) => {
        logger.error("Failed to connect to database", err);
        process.exit(1);
    });

// then start the server and register routes
app.use("/api/auth", authRoutes);
app.use(verifyJWT); // routes other than auth require tokens
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});



