const express = require("express");
const {
  addBook,
  getBook,
  updateBook,
} = require("../controller/bookController");
const { isAuthenticated, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/book/get").get(getBook);
router
  .route("/book/add")
  .post(isAuthenticated, authorizeRoles("admin"), addBook);
router
  .route("/book/update")
  .patch(isAuthenticated, authorizeRoles("admin"), updateBook);

module.exports = router;
