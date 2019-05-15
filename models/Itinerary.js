const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  profilepic: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  hashtag: {
    type: String,
    required: true
  }
});
module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema);
