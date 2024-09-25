const mongoose = require("mongoose");
const SubcategorySchema = mongoose.Schema({
  section: {
    type: String,
    required: true,
  },
  chartertype: {
    type: String,
    required: true,
  },
  subCategoryName: {
    type: String,
    required: true,
  },
  pax: {
    type: String,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: "This file is required.",
  },
  date: {
    type: String,
    required: true,
  },
  speed: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },

  availability: {
    type: String,
    enum: ["yes", "no"],
    default: "no",
  },
  journeytype: {
    type: String,
    enum: ["one-way", "round-trip", "multi-leg"],
    default: "one-way",
  },
  yom: {
    type: String
  },
  seats: {
    type: String
  },
  crew: {
    type: String
  },
  airhosts: {
    type: String
  },
  lavatory: {
    type: String
  },
  fromtime: {
    type: String
  },
  endtime: {
    type: String
  },
  flyingrange: {
    type: String
  },
  cabinwidth: {
    type: String
  },
  cabinheight: {
    type: String
  },
  baggage: {
    type: String
  },
  cabinlength: {
    type: String
  },
  pilot: {
    type: String
  },
  discount: {
    type: String
  },
  discountprice: {
    type: String,
    default: "0",
  },
  duration: {
    type: String
  },
  reachdate: {
    type: String
  },
  yor: {
    type: String
  },
  targetprice: {
    type: String
  },
  brokercompany: {
    type: String
  },
  flexibility: {
    type: String,
    enum: ["yes", "no"],
    default: "no",
  },
  operatorname: {
    type: String
  },
  operatoremail: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },
  operatorphone: {
    type: String,
    match: [/^\d{10}$/, "Please enter a valid phone number"]
  },
});

module.exports = mongoose.model("Subcategory", SubcategorySchema);
