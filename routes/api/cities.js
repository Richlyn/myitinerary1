const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.send("it works!");
});

router.get("/1", function(req, res) {
  res.send("specific city!");
});

module.exports = router;
