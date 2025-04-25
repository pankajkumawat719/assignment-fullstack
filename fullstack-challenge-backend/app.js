const express = require("express");
const app = express();
const adminRoutes = require("./routes/adminRoutes");

// Middleware to parse JSON
app.use(express.json());

// Use admin routes
app.use("/api/admin", adminRoutes);

module.exports = app;
