const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();  // Load environment variables from .env

const app = express();

// Allow requests from the React front-end (usually on port 3000)
app.use(cors({
  origin: 'http://localhost:3000',  // Adjust if using a different port for React
}));

// Use JSON middleware to parse incoming requests
app.use(express.json());

// Serve React build static files from the correct location
app.use(express.static(path.join(__dirname, "..", "build")));

// API route example
app.get("/api/movies", (req, res) => {
  res.json({ message: "Movies endpoint working!" });
});

// Catch-all handler to return React's index.html for any route
app.get("*", (req, res) => { 
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("API key defined:", !!process.env.TMDB_API_KEY);  // Check if TMDB_API_KEY is loaded from .env
});
