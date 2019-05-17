const express = require("express");
const router = express.Router();
const City = require("../../models/City");

router.get("/", function(req, res) {
  City.find()
    .then(cities => {
      if (!cities) {
        return res.status(400).json({ msg: "No cities" });
      }
      res.json(cities);
    })
    .catch(err => res.status(404).json({ nocities: "There are no cities" }));
});

router.get("/:itineraries._id", function(req, res) {
  var choice = req.params.itineraries;
  var responseObj = {
    message: "this works" + " " + choice + " " + "seriously"
  };
  res.send(responseObj);
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
