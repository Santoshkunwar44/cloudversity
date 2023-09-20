const { createCourse, updateCourse, deleteCourse, getCourse } = require("../controllers/CourseController");
const router = require("express").Router()

router.post("/create",createCourse)
router.get("/",getCourse)
router.put("/:id",updateCourse)
router.delete("/:id",deleteCourse)

module.exports = router;