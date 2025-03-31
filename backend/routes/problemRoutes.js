const express = require("express");
const router = express.Router();
const { getAllProblems, getProblemById, addProblem, updateProblem, deleteProblem } = require("../controllers/problemController");
const authenticateJWT = require("../middlewares/authMiddleware");

// public routes
router.get("/", getAllProblems);
router.get("/", getProblemById);

//private routes
router.post("/", authenticateJWT,addProblem);
router.put("/", authenticateJWT,updateProblem);
router.delete("/", authenticateJWT,deleteProblem);

module.exports = router;
