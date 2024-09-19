const controller = require('./controller');
const express = require('express');
const router = express.Router();

router.route('/cards') 
.get(controller.getCards)


module.exports = router;