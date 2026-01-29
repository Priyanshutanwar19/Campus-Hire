const asyncHandler = require("../utils/asyncHandler");
const Application = require("../models/application");
const Job = require("../models/job");
const User = require("../models/user");

exports.applyJob = asyncHandler(async (req, res) => {
  const studentId = req.user._id;
  const { jobId } = req.body;

  const student = await User.findById(studentId);
  const job = await Job.findById(jobId);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  if (student.cgpa < job.minCGPA) {
    res.status(400);
    throw new Error("CGPA criteria not met");
  }

  if (!job.eligibleBranches.includes(student.branch)) {
    res.status(400);
    throw new Error("Branch not eligible");
  }

  const alreadyApplied = await Application.findOne({
    student: studentId,
    job: jobId
  });

  if (alreadyApplied) {
    res.status(400);
    throw new Error("Already applied to this job");
  }

  const application = await Application.create({
    student: studentId,
    job: jobId
  });

  res.status(201).json(application);
});

exports.updateStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const application = await Application.findById(req.params.id);

  if (!application) {
    res.status(404);
    throw new Error("Application not found");
  }

  application.status = status;
  await application.save();

  res.json(application);
});
