const express = require("express");
const path = require("path");
const downloader = require("./routes/downloader");

const app = express();

// Middleware to parse URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" directory (e.g., index.html)
app.use(express.static(path.join(__dirname, "public")));

// Mount the downloader routes at /api
app.use("/api", downloader);

// Start the server on port 2020
const PORT = 2020;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
