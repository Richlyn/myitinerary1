const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/db").mongoURI;
// const path = require("path");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, createindex: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

//Use Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importing the routes
app.use("/api/cities", require("./routes/api/cities"));
app.use("/api/itineraries", require("./routes/api/itineraries"));
app.use("/api/activities", require("./routes/api/activities"));
//app.use("/api/users", require("./routes/api/user"));
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.listen(port, () => console.log("Magic happens on port " + port));
