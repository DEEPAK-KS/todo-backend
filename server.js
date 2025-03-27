require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ✅ Initialize Express first
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware (use before routes)
app.use(cors());
app.use(express.json());

// ✅ Import Routes (AFTER initializing Express)
const taskRoutes = require("./routes/tasks");
app.use("/api", taskRoutes);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Start Server (at the end)
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
