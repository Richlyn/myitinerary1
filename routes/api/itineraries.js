const express = require("express");
const router = express.Router();
const Itinerary = require("../../models/Itinerary");

router.get("/", function(req, res) {
  Itinerary.find()
    .then(itineraries => {
      if (!itineraries) {
        return res.status(404).json("oops! no itineraries");
      }
      res.json(itineraries);
    })
    .catch(err => res.status(404).json("sorry Error"));
});

router.get("/:name", function(req, res) {
  var city = req.params.name;
  Itinerary.find({ City: city }, (err, itineraries) => {
    if (!itineraries) {
      return res.status(404).json(err);
    } else {
      res.send(itineraries);
    }
  });
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
