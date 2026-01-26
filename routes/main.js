const express = require('express');
const { login,dashboard } = require('../controllers/main');
const router = express.Router();



router.route('/dashboard').get(dashboard);
router.route('/login').post(login);

module.exports = router;

//5:21