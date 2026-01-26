const Application = require("../models/application");
const Job = require("../models/job");
const User = require("../models/user");

exports.applyJob = async (req, res) => {
  const student = await User.findById(req.user.id);
  const job = await Job.findById(req.body.jobId);

  if (student.cgpa < job.minCGPA) {
    return res.status(400).json({ message: "Not eligible" });
  }

  if (!job.eligibleBranches.includes(student.branch)) {
    return res.status(400).json({ message: "Not eligible" });
  }

  const application = await Application.create({
    student: student._id,
    job: job._id
  });

  res.status(201).json(application);
};

exports.updateStatus = async (req, res) => {
  const application = await Application.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(application);
};
