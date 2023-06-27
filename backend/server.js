const express = require("express");
const multer = require('multer');
const bodyParser = require('body-parser');
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5001;
const path = require("path");


connectDB();

const app = express();

//middleware for body parser
const forms = multer();
app.use(express.json());
app.use(forms.any());
app.use(express.urlencoded({ extended: false }));

// Declaring Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/useRoutes"));
app.use("/api/app", require("./routes/appRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
