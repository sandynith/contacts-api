const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const {
  getAllUsers,
  registerUsers,
  loginUsers,
  currentUser,
  logout,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/register", registerUsers);
router.post("/login", loginUsers);
router.get("/current", validateToken, currentUser); // Protected route
router.post("/logout", validateToken, logout); // Protected route

module.exports = router;
