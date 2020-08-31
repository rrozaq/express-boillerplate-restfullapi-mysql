'use strict'

const express = require('express');
const adminController = require('../controllers/admin/Authcontroller');
const { API_PATH } = require('../helpers/constant');
const router = express.Router();

router.post(`${API_PATH}/admin/login`, adminController.login);

module.exports = router;