'use strict'

const express = require('express');
const siswaController = require('../controllers/siswa/siswaController');
const { API_PATH } = require('../helpers/constant');
const router = express.Router();
const verifyToken = require('../helpers/token_validation');

router.get(`${API_PATH}/siswa`, verifyToken, siswaController.index);
router.get(`${API_PATH}/siswa/:id`, verifyToken, siswaController.show);
router.post(`${API_PATH}/siswa`, verifyToken, siswaController.store);
router.put(`${API_PATH}/siswa/:id`, verifyToken, siswaController.update);
router.delete(`${API_PATH}/siswa/:id`, verifyToken, siswaController.delete);

module.exports = router;