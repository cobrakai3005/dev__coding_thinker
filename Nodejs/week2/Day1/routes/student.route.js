const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Welcome to My App");

  res.send("Hello From My App");
});

router.get("/read", (req, res) => {
  console.log("Here is you data");

  res.send("Here is you data....");
});

module.exports = router;
