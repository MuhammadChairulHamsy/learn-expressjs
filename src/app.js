import express from "express";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./controllers/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hallo");
});

app.use("/api", authRoutes);

// Error handler (harus di paling bawah)
app.use(errorHandler);

export default app;