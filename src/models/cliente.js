'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('cliente', schema);