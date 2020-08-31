'use strict'

const express = require('express');
const routing = express();
const siswa = require('./siswa');
const admin = require('./admin');

routing.use(siswa);
routing.use(admin);

module.exports = routing