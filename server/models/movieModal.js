const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: [String], required: true },
  censorRatingIndia: String,
  releaseDate: Date,
  directedBy: String,
  writtenBy: String,
  cinematographyBy: String,
  moviePoster: String,
  movieBanner: String,
  awards: [{
    award: String,
    category: String,
    result: String
  }],
  plot: String,
  cast: [{
    actorName: String,
    characterName: String
  }],
  streamingAvailabilityIndia: [String]
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;