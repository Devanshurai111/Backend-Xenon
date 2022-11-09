
import express from "express";

import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";

connectDB();
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, console.log(`server running in `));
