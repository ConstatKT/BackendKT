const mongoose = require("mongoose");

const ConstaSchema = new mongoose.Schema(
  {
    X: {
      type: String,
      required: true
  },
      Y: {
    type: String,
    required: true
     },
     user1: {
        type: String,
        required: true
    },
    user2: {
        type: String,
        required: true
    },
    vt1: {
        type: String,
        required: true
    },
    vt2: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: true
    },
    assurance1: {
        type: String,
        required: true
    },
    assurance2: {
        type: String,
        required: true
    },
    
  }, 
  {
    timestamps: { currentTime: () => Date.now() },
  }
);
module.exports = mongoose.model("Consta", ConstaSchema);
