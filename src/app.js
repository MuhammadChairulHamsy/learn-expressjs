import express from "express";
import userRoute from "./routes/user.route.js";
import pageUserRoute from "./routes/page-user.route.js";
import errorHandler from "./controllers/errorHandler.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/api/user", userRoute);
app.use("/", pageUserRoute);
// Error handler (harus di paling bawah)
app.use(errorHandler);

export default app;
