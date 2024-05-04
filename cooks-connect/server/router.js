const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const communityMember = mongoose.model(
  "community",
  {
    name: String,
    date: Date,
    dishCount: Number,
  },
  "community"
);
router.post("/joinCommunity", async (req, res) => {
  console.log("RQ", req.body);
  const { name, date, dishCount } = req.body;
  if (!name) return;

  const newMember = new communityMember({
    name: name,
    date: date,
    dishCount: dishCount,
  });

  await newMember.save();
  res.send({
    status: 200,
    message: "got req",
    req: req.body,
  });
  return;
});

router.get("/community", async (req, res) => {
  try {
    // Retrieve all community members from the database
    const communityMembers = await communityMember.find();
    res.send({
      status: 200,
      message: "Retrieved all community members successfully",
      data: communityMembers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: "Internal server error",
    });
  }
});

module.exports = router;
