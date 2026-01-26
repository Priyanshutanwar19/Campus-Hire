const express = require("express");
const router = express.Router();


router.post("/test", (req, res) => {
  res.json({
    message: "POST route working",
    data: req.body
  });
});

module.exports = router;
