const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: {
    type: String,
    required: true
  }
});
module.exports = Activity = mongoose.model("activity", ActivitySchema);
