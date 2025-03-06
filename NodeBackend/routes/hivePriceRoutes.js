const express = require("express");
const router = express.Router();
const { getHiveTokensPrices } = require("../controllers/hivePriceController");

router.get("/prices", getHiveTokensPrices);

module.exports = router;
