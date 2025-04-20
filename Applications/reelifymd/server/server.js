const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();  // Load environment variables from .env

const app = express();

// Allow requests from the React front-end (usually on port 3000)
app.use(cors({
  origin: 'http://localhost:3000',  // Allowing requests from React app running on port 3000
}));

// Use JSON middleware to parse incoming requests
app.use(express.json());

// Serve React build static files from the correct location
app.use(express.static(path.join(__dirname, '..', 'build')));

// API route example - Get Trending Movies (adjust as needed)
app.get('/api/trending/day', (req, res) => {
  // Example of a route returning trending movies data
  // In reality, you would fetch this from a database or an external API like TMDB
  res.json({
    message: 'Trending movies data',
    data: [
      { id: 1, title: 'Movie 1', genre: 'Action' },
      { id: 2, title: 'Movie 2', genre: 'Comedy' },
      { id: 3, title: 'Movie 3', genre: 'Drama' },
    ],
  });
});

// API route for genres
app.get('/api/genres', (req, res) => {
  res.json({
    message: 'Genres data',
    genres: ['Action', 'Comedy', 'Drama', 'Horror'],
  });
});

// Catch-all handler to return React's index.html for any route
app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('API key defined:', !!process.env.TMDB_API_KEY);  // Ensure TMDB API key is available in env
});
