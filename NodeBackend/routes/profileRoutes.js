const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const User = require('../models/userModel');

// Test route to list all users
router.get('/test/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json({
            success: true,
            count: users.length,
            users: users.map(u => u.username)
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Get user profile
router.get('/:username', profileController.getProfile);

// Update user profile
router.put('/:username', profileController.updateProfile);

router.put('/:username/security', profileController.updateSecuritySettings);

module.exports = router; 