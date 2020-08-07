const router = require("express").Router();
const frequencyController = require("../../controllers/frequencyController");

router.route('/')
    .post(frequencyController.create);

module.exports = router;