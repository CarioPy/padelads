const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [40, "Name length cannot exceed 40 characters"],
  },

  score: {
    type: Number,
    required: [true, "Please add a score"],
  },
});

module.exports =
  mongoose.models.Player || mongoose.model("Player", PlayerSchema);
