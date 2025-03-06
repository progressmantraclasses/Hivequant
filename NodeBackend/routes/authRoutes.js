const express = require("express");
const router = express.Router();
const { hiveLogin } = require("../controllers/authController");

// Hive login route
router.post("/hive-login", hiveLogin);

module.exports = router;
