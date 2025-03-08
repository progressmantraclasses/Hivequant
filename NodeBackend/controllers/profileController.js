const User = require('../models/userModel');

// Get user profile
exports.getProfile = async (req, res) => {
    try {
        const username = req.params.username;
        console.log('Getting profile for username:', username);

        const user = await User.findOne({ username });
        console.log('Database query result:', user ? 'User found' : 'User not found');

        if (!user) {
            console.log('Sending 404 - User not found');
            return res.status(404).json({
                success: false,
                error: `User ${username} not found`
            });
        }

        console.log('Sending user data');
        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        console.error('Error in getProfile:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { username: req.params.username },
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        res.json({ success: true, data: updatedUser });
    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update security settings
exports.updateSecuritySettings = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { username: req.params.username },
            { securitySettings: req.body },
            { new: true }
        );
        res.json({ success: true, data: user.securitySettings });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}; 