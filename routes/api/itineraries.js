const express = require("express");
const router = express.Router();
const City = require("../../models/itineraries");


router.get("/itineraries", function(req, res){
  itineraries
  .find()
  .then(itineraries => {
    if (!itineraries){
      return res.status(404).json ({"oops! no itineraries"})
    }
    res.json(itineraries);
  })
  .catch(err => res.status(404).json({"sorry Error"}))
})

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
