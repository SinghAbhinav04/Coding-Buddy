const express = require("express");
const router = express.Router();
const { register, login, logout, getUserProfile } = require("../controllers/authController");
const authenticateJWT = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/profile", authenticateJWT,getUserProfile);

module.exports = router;
