const router = require("express").Router();
const { register, login, logout, getCurrentUser } = require("../controllers/authController");
const auth = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", auth, getCurrentUser);

module.exports = router;
