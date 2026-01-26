const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    status: {
      type: String,
      enum: ["APPLIED", "SHORTLISTED", "REJECTED", "HIRED"],
      default: "APPLIED"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
