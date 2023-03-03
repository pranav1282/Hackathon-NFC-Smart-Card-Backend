const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
    },
    contact: {
      type: String,
    },
    route_category: {
      type: String,
    },
    bus_number: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
