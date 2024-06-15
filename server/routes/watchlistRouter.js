// routes/watchlist.js
const express = require('express');
const WatchlistModel = require('../models/watchlistModal');

const router = express.Router();



router.post('/watchlist-upload', async (req, res) => {

    const { watchlistAvatar, watchlistName } = req.body;
    try {
        const watchlistdata = await WatchlistModel.create({ watchlistAvatar, watchlistName })
        res.send("success");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

router.get('/watchlist-get', async (req, res) => {
    try {
        const watchlistdata = await WatchlistModel.find();
        res.status(200).json(watchlistdata);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
