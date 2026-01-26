const Company = require("../models/company");

exports.createCompany = async (req, res) => {
  const company = await Company.create(req.body);
  res.status(201).json(company);
};

exports.getCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
};
