const express = require("express");
const router = express.Router();
const contactRoutes = require("./contactRoutes"); // Import contact routes

// Use contact routes for /api/contact
router.use("/", contactRoutes);

module.exports = router;
