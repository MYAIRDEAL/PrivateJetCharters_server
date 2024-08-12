const mongoose = require("mongoose");
const categorymodifySchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
  },
  chartertype: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: "This file is required.",
  },
});

module.exports = mongoose.model("Categorymodify", categorymodifySchema);
