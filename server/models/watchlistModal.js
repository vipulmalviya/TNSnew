// models/watchlistModel.js
const mongoose = require('mongoose');

const WatchlistSchema = new mongoose.Schema({
    watchlistName: {
        type: String,
        required: true,
        trim: true
    },
    watchlistAvatar: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const WatchlistModel = mongoose.model('Watchlist', WatchlistSchema);

module.exports = WatchlistModel;
