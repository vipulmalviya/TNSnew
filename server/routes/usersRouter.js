const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/userModal');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).send("success");
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send("success");
    } catch (error) {
        console.error('Error logging in:', error.message);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error('Error fetching user data:', error.message);
        res.status(500).json({ message: 'Error fetching user data', error: error.message });
    }
});

module.exports = router;
