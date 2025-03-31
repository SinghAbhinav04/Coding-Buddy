const express = require("express");
const router = express.Router();
const { runCode, testCode , submitCode } = require("../controllers/compilerController.js");
const authenticateJWT = require("../middlewares/authMiddleware");

// Compile and run code
router.post("/run", authenticateJWT, runCode);

// Run with test cases
router.post("/test", authenticateJWT, testCode);

router.post("/code",submitCode)

module.exports = router;
