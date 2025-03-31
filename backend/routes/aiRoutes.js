const express = require("express");
const router = express.Router();
const { generateSolution, optimizeSolution, mockInterview, analyzeCode } = require("../controllers/aiController");

router.post("/generate-solution", generateSolution);
router.post("/optimize-solution", optimizeSolution);
router.post("/mock-interview", mockInterview);
router.post("/analyze-code", analyzeCode);

module.exports = router;
