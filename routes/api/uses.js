const router = require("express").Router();
const usesController = require("../../controllers/usesController");

router.route('/')
    .post(usesController.create);

module.exports = router;