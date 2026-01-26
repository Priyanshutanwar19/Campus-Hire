const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: String,
    description: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
