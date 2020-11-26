'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produto-controller');
const authService = require('../services/auth-service');

router.get('/getAll', controller.get);
router.get('/getByDescricao', controller.getByDescricao);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/', controller.delete);

module.exports = router;