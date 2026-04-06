const express = require('express');
const router = express.Router();
const {
    getAllCoursesAdmin,
    getPendingCourses,
    approveCourse,
    rejectCourse,
    getAdminStats,
} = require('../controllers/adminCourseController');
const { protect, admin } = require('../middleware/authMiddleware');

// All routes require admin authentication
router.use(protect, admin);

router.get('/', getAllCoursesAdmin);
router.get('/stats', getAdminStats);
router.get('/pending', getPendingCourses);
router.post('/:id/approve', approveCourse);
router.post('/:id/reject', rejectCourse);

module.exports = router;
