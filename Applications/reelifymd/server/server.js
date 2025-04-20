const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Your API route example
app.get("/api/movies", (req, res) => {
  res.json({ message: "Movies endpoint working!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("API key defined:", !!process.env.TMDB_API_KEY);
});
