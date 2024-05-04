const express = require("express");
const router = express.Router();

router.post("/joinCommunity", async (req, res) => {
  res.send({ status: 200, message: "got req", req: req.body });
  return;
});

module.exports = router;
