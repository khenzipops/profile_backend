const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes"); // ✅ Correct path
const errorHandler = require("./middlewares/errorHandler"); // ✅ Correct path
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api", apiRoutes); // ✅ Correct route

// Error handling middleware
app.use(errorHandler);

module.exports = app;
