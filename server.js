const express = require("express");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const usersRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 3001;

// Middleware
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contacts", contactRoutes);
app.use("/api/users", usersRoutes);
app.use(errorHandler);

// Start the server
app.listen(port, (req, res, err) => {
  if (err) {
    console.error(err);
    return;
  }
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});

// Default handler
// 404 - catch all other routes
app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).json({ message: "Route not found!" });
});
