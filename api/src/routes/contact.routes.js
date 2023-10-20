var express = require('express');
var router = express.Router();

const contactController = require('../controllers/contact.controller');

router.post("/", contactController.sendEmail);

module.exports = router;