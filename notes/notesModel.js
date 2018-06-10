const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Notes = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Notes", Notes);
