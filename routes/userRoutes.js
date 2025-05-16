const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const {
  getAllUsers,
  registerUsers,
  loginUsers,
  currentUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/register", registerUsers);
router.post("/login", loginUsers);
router.get("/current", validateToken, currentUser); // Protected route

// router.use(defaultHandeler);
// router.get("/logout", (req, res) => {
//   res.status(200).json({ message: "User logged out!" });
// });

module.exports = router;
