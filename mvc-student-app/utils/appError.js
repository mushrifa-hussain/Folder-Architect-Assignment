const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

// custom logger middleware
app.use(logger);

// routes
app.use("/students", studentRoutes);

// test route
app.get("/", (req, res) => {
    res.send("Student MVC API is Running...");
});

// error handling middleware
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});