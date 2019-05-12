const express = require("express");
const router = express.Router();
const City = require("../../models/City");

router.get("/all", function(req, res) {
  City.find()
    .then(cities => {
      if (!cities) {
        return res.status(400).json({ msg: "No cities" });
      }
      res.json(cities);
    })
    .catch(err => res.status(404).json({ nocities: "There are no cities" }));
});

router.get("/cityname", function(req, res) {
  CityName.find()
    .then(cityName => {
      if (!cityName) {
        return res.status(400).json({ msg: "no city found" });
      }
      res.json(cityName);
    })
    .catch(err =>
      res.status(404).json({ msg: "There are no cities available" })
    );
});

// app.post("/name/add", (req, res, next) => {
//   var name = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name
//   };

//   dbase.collection("name").save(name, (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send("name added successfully");
//   });
// });
module.exports = router;
