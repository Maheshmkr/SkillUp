const express = require('express');
const router = express.Router();
const {
    getInstructorCourses,
    getInstructorCourse,
    createInstructorCourse,
    updateInstructorCourse,
    submitCourseForReview,
    deleteInstructorCourse,
    getInstructorReviews,
    getInstructorEnrollments,
} = require('../controllers/instructorCourseController');
const { protect } = require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

// 1. Static Routes (Must be BEFORE parameterized routes /:id)
router.get('/reviews', getInstructorReviews);
router.get('/enrollments', getInstructorEnrollments);
router.get('/', getInstructorCourses);

// 2. Parameterized Routes
router
    .route('/:id')
    .get(getInstructorCourse)
    .put(updateInstructorCourse)
    .delete(deleteInstructorCourse);

router.post('/', createInstructorCourse);
router.post('/:id/submit', submitCourseForReview);

module.exports = router;
