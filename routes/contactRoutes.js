const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
} = require("../controllers/contactControllers");

router.use(validateToken); // Protect all routes after this middleware
router.route("/").get(getContacts).post(createContact);
router
  .route("/:id")
  .get(getContactById)
  .put(updateContactById)
  .post(updateContactById)
  .delete(deleteContactById);

module.exports = router;
