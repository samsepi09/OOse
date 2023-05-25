const mongoose = require("mongoose");

const LinkeSchema = new mongoose.Schema({
  link: String,
  pass: String,
});

const data = mongoose.model("Link", LinkeSchema);

module.exports = data;
