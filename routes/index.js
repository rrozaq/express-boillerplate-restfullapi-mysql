'use strict'

const express = require('express');
const routing = express();
const siswa = require('./siswa');

routing.use(siswa);

module.exports = routing