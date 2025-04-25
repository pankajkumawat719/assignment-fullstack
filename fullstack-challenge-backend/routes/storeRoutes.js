const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");
const { authMiddleware } = require("../middleware/authMiddleware"); // Assuming this verifies store owner

// Add a new store
router.post("/", authMiddleware, storeController.addStore);

// Get all stores
router.get("/", storeController.getAllStores);

// Get a single store
router.get("/:id", storeController.getStoreById);

module.exports = router;
