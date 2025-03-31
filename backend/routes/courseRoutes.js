const express = require("express");
const router = express.Router();
const { getAllCourses, getCourseById, addCourse, updateCourse, deleteCourse } = require("../controllers/courseController");
const authenticateJWT = require("../middlewares/authMiddleware");

// public routes
router.get("/", getAllCourses);
router.get("/", getCourseById);

// private routes
router.post("/", authenticateJWT,addCourse);
router.put("/", authenticateJWT,updateCourse);
router.delete("/", authenticateJWT,deleteCourse);

module.exports = router;
