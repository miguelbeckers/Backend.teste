'use strict'

const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Backend-teste",
        version: "0.0.1"
    });
});

module.exports = router;