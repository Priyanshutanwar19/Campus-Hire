const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const { createJob, getJobs } = require("../controllers/jobController");

router.post("/", auth, role("ADMIN"), createJob);
router.get("/", auth, getJobs);

module.exports = router;
