'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-controller');
const authService = require('../services/auth-service');

router.get('/getAll', controller.get);
router.get('/getByName', controller.getByName);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/', controller.delete);

module.exports = router;