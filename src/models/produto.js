'use strict';

const { mongo } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    dataNascimento: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('pedido', schema);