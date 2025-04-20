const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("API key defined:", !!process.env.TMDB_API_KEY);
});
