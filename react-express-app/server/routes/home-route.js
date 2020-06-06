const express = require('express');

const homeControllers = require('../controllers/home-controller');

const router = express.Router();

router.get('/', homeControllers.homeGet);

module.exports = router;