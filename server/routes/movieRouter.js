const express = require('express');
const Movie = require('../models/movieModal');

const router = express.Router();

// Get all movies
router.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a movie by ID
router.get('/api/movies/:id', async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// find movies by genres and type

router.post('/movies-find', async (req, res) => {
  const { params, type } = req.body
  console.log(params, type);
  try {
    const movie = await Movie.find({ Type: type , genre: { $in: params } })
    // const movie = await Movie.find() 

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
