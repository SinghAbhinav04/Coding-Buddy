const express = require("express");
const router = express.Router();
const { getLeaderboardByLevel, updateLeaderboard } = require("../controllers/leaderboardController");

router.get("/level", getLeaderboardByLevel);
router.post("/update", updateLeaderboard);

module.exports = router;
