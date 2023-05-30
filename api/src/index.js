/* package imports */
import express from "express";
import dotenv from "dotenv";
dotenv.config();

/* custom imports */
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./config/db.js";

/* extracting port number */
const PORT = process.env.PORT || 5000;

/* initializing express app */
const app = express();

/* general express middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* default path for users */
app.use("/api/v1/users", userRoutes);

/* custom middleware */
app.use(notFound);
app.use(errorHandler);

/* calling the connectDB function which helps in connecting to database */
connectDB();

/* port listener */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
