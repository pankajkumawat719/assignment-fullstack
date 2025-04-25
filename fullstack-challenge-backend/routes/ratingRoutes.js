const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/ratingController");
const { authMiddleware } = require("../middleware/authMiddleware"); // Assuming this verifies user

// Add a new rating for a store
router.post("/:storeId", authMiddleware, ratingController.addRating);

// Get all ratings
router.get("/", ratingController.getAllRatings);

// Get ratings for a specific store
router.get("/:storeId", ratingController.getRatingsByStore);

module.exports = router;
