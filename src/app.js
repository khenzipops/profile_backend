const express = require("express");
const app = express();
const apiRoutes = require("../api/apiRoutes"); // ✅ Correct path
const errorHandler = require("./middlewares/errorHandler"); // ✅ Correct path
const cors = require("cors");

app.use(
  cors({
    origin: "https://kenneth-popera.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Contact form route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Form submission:", { name, email, message });
  res.json({ message: "Form submitted successfully!" });
});

app.use(express.json());

app.use("/api", apiRoutes); // ✅ Correct route

// Error handling middleware
app.use(errorHandler);

module.exports = app;
