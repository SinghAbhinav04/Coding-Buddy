const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById, updateUserProgress, deleteUser } = require("../controllers/userController");
const authenticateJWT = require("../middlewares/authMiddleware");

router.get("/", authenticateJWT ,getAllUsers);
router.get("/", authenticateJWT ,getUserById);
router.put("/progress", authenticateJWT ,updateUserProgress);
router.delete("/", authenticateJWT ,deleteUser);

module.exports = router;
