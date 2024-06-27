// routes/watchlist.js
const express = require('express');
const mongoose = require('mongoose');
const WatchlistModel = require('../models/watchlistModal');
const MovieModel = require('../models/movieModal');
const ObjectId = require('mongodb');

const router = express.Router();



// watchlist upload route

router.post('/watchlist-upload', async (req, res) => {

    const { watchlistAvatar, watchlistName } = req.body;
    try {
        const watchlistdata = await WatchlistModel.create({ watchlistAvatar, watchlistName })
        res.send("success");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

// watchlist fetch route

router.get('/watchlist-get', async (req, res) => {
    try {
        const watchlistdata = await WatchlistModel.find();
        res.status(200).json(watchlistdata);
        // res.send(watchlistdata);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// update wathlist route

router.post('/update-watchlist', async (req, res) => {
    const { cardId, movieDetails } = req.body;
    try {
        let validCardId = cardId;
        if (typeof cardId === 'object' && cardId.id) {
            validCardId = cardId.id;
        }

        const result = await WatchlistModel.updateOne(
            { _id: validCardId },
            { $push: { movieTitles: movieDetails } }
        );

        res.json(result);
    } catch (error) {
        console.error('Error updating watchlist:', error);
        res.status(500).json({ error: 'Failed to update watchlist', message: error.message });
    }
});

// for delete wathclist
router.post('/watchlist-delete', async (req, res) => {
    const { watchlistId } = req.body;
    try {
        let validCardId = watchlistId;
        if (typeof watchlistId === 'object' && watchlistId) {
            validCardId = watchlistId;
        }

        const result = await WatchlistModel.deleteOne(
            { _id: validCardId },
        );

        res.json(result);
    } catch (error) {
        console.error('Error updating watchlist:', error);
        res.status(500).json({ error: 'Failed to update watchlist', message: error.message });
    }
});

// for watchlist update

router.post("/watchlist-update", async (req, res) => {
    const { watchlistAvatar, watchlistName, cardId } = req.body;

    try {
        const result = await WatchlistModel.updateOne({ _id: cardId },
            { $set: { watchlistAvatar: watchlistAvatar, watchlistName: watchlistName } }
        )
        res.json(result);

    } catch (error) {
        console.error('Error updating watchlist:', error);
        res.status(500).json({ error: 'Failed to update watchlist', message: error.message });
    }
});

// for wathlist titles

router.get("/manageTitles/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const watchlistdata = await WatchlistModel.findById(id);

        if (!watchlistdata) {
            return res.status(404).json({ error: 'Watchlist not found' });
        }

        res.status(200).json(watchlistdata);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// for delete titles


router.post("/delete-title", async (req, res) => {
    const { listId, getId } = req.body;

    try {
        // Validate listId and getId
        if (!mongoose.Types.ObjectId.isValid(getId)) {
            return res.status(400).json({ error: 'Invalid watchlist ID' });
        }
        // if (!mongoose.Types.ObjectId.isValid(listId)) {
        //     return res.status(400).json({ error: 'Invalid title ID' });
        // }

        // Update the watchlist by pulling the specific title from movieTitles array
        const updatedWatchlist = await WatchlistModel.updateOne(
            { _id: getId }, { $pull: { movieTitles: { name: listId } } }
        );

        if (!updatedWatchlist) {
            return res.status(404).json({ error: 'Watchlist not found' });
        }

        res.status(200).json({ message: 'Success', updatedWatchlist });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
