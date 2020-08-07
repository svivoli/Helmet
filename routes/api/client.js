const router = require("express").Router();
const clientController = require("../../controllers/clientController");

router.route('/')
    .post(clientController.create);

module.exports = router;