const express = require("express");
const router = express.Router();

router.get('/a', function (req, res) {
  res.send("sassasa")
})


module.exports = router
