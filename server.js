const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;
const citiesRoute = require("./routes/api/cities");

const app = express();
const port = process.env.PORT || 5000;
mongoose
  .connect(db, { useNewUrlParser: true, createindex: true })
  .then(() => console.log("connected to mongodb"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/cities", citiesRoute);

app.listen(port, () => console.log("Magic happens on port " + port));
