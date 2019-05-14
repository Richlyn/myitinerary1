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

// router.get("/itinerary", function(req, res){
//   itinerary
//   .find()
//   .then(itinerary => {
//     if (!itinerary){
//       return res.status(404).json ({"oops! no itineraries"})
//     }
//     res.json(itinerary);
//   })
//   .catch(err => res.status(404).json({"sorry Error"}))
// })

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
