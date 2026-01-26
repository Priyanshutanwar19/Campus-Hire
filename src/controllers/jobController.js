const Job = require("../models/job");

exports.createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json(job);
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find().populate("company");
  res.json(jobs);
};
