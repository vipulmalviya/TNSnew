// routes/watchlist.js
const express = require('express');
const mongoose = require('mongoose');
const WatchlistModel = require('../models/watchlistModal');
const MovieModel = require('../models/movieModal');
const ObjectId = require('mongodb');

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

router.post('/update-watchlist', async (req, res) => {
    const { cardId, movieId } = req.body;
    console.log(cardId);
    try {
        const movie = await MovieModel.findById(movieId);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        const result = await WatchlistModel.updateOne(
            { _id: cardId },
            { $push: { movieTitles: movieId } }
        );

        res.json(result);
    } catch (error) {
        console.error('Error updating watchlist:', error);
        res.status(500).json({ error: 'Failed to update watchlist', message: error.message });
    }
});


module.exports = router;
