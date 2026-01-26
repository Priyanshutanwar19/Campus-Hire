const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    minCGPA: Number,
    eligibleBranches: [String],
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
