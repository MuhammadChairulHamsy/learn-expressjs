import express from "express";
import userRoute from "./routes/user.route.js";
import pageUserRoute from "./routes/page-user.route.js";
import errorHandler from "./controllers/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Api / JSON
app.use("/api/user", userRoute);
app.use("/api/user/:id", userRoute);

// Routes Page
app.use("/", pageUserRoute);

app.use(errorHandler);

export default app;
