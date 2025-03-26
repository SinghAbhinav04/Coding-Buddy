const express = require("express");
const router = express.Router();
const { runCode, testCode } = require("../controllers/compilerController.js");
const authenticateJWT = require("../middlewares/authMiddleware");

// Compile and run code
router.post("/run", authenticateJWT, runCode);

// Run with test cases
router.post("/test", authenticateJWT, testCode);

module.exports = router;
