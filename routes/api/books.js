const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// landing page
router.route("/:id").post(bookController.create);

// saved page
router.route("/saved").get(bookController.findAllSaved);

// delete call
router.route("/delete/:id").delete(bookController.remove);

module.exports = router;
