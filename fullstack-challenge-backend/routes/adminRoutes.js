const express = require("express");
const router = express.Router();
const { getUsers, getStores } = require("../controllers/adminController");
const { authMiddleware } = require("../middlewares/authMiddleware");

// Define routes with middleware and controller functions
router.get("/users", authMiddleware, getUsers);
router.get("/stores", authMiddleware, getStores);

module.exports = router;
