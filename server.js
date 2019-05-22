const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/db").mongoURI;

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

const cities = require("./routes/api/cities");
const itineraries = require("./routes/api/itineraries");
const activities = require("./routes/api/activities");
const userRoute = require("./routes/api/users");
const cors = require("cors");

//importing the routes
app.use("/api/cities", cities);
app.use("/api/itineraries", itineraries);
app.use("/api/activities", activities);
app.use("/api/users", userRoute);
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.listen(port, () => console.log("Magic happens on port " + port));
