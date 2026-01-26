const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const { createCompany, getCompanies } = require("../controllers/companyController");

router.post("/", auth, role("ADMIN"), createCompany);
router.get("/", auth, getCompanies);

module.exports = router;
