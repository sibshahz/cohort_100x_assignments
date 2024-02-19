const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User} = require("../db/index.js");

// User Routes
router.post('/signup', async (req, res) => {
    try {
        // Implement user signup logic with proper error handling
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        res.json({
            message: 'User created successfully.',
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ error: `Internal Server Error ${error.message}` });
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router