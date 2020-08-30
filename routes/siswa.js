'use strict'

const express = require('express');
const siswaController = require('../controllers/siswa/siswaController');
const { API_PATH } = require('../helpers/constant');
const router = express.Router();

router.get(`${API_PATH}/siswa`, siswaController.index);
router.get(`${API_PATH}/siswa/:id`, siswaController.show);
router.post(`${API_PATH}/siswa`, siswaController.store);
router.put(`${API_PATH}/siswa/:id`, siswaController.update);
router.delete(`${API_PATH}/siswa/:id`, siswaController.delete);

module.exports = router;