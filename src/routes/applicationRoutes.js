const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const { applyJob, updateStatus } = require("../controllers/applicationController");

router.post("/", auth, role("STUDENT"), applyJob);
router.put("/:id", auth, role("ADMIN"), updateStatus);

module.exports = router;
