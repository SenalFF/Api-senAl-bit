const express = require("express");
const downloader = require("./routes/downloader");

const app = express();

// Middleware to parse URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mount the downloader routes at /api
app.use("/api", downloader);

// Start the server on port 2020
app.listen(2020, () => {
  console.log("✅ Server is running on http://localhost:2020");
});
