const express = require("express");
const router = express.Router();
const Activity = require("../../models/Activity");

router.get("/", function(req, res) {
  Activity.find()
    .then(activities => {
      if (!activities) {
        return res.status(404).json("oops! no activities");
      }
      res.json(activities);
    })
    .catch(err => res.status(404).json("ach no sorry Error"));
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
