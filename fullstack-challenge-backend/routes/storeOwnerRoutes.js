const express = require("express");
const router = express.Router();
const storeOwnerController = require("../controllers/storeOwnerController");
const { authMiddleware } = require("../middleware/authMiddleware"); // Assuming this verifies store owner

// Get dashboard data (Store details + users who rated)
router.get("/dashboard", authMiddleware, storeOwnerController.getDashboardData);

module.exports = router;
