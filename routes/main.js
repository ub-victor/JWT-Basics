const express = require('express');
const { dashboard } = require('../controllers/main');
const router = express.Router();

const {login, dashboard} = require('../controllers/main')

router.route('/dashboard').get(dashboard);
router.route('/login').post(login);