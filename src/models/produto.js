'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        required: true,
        trim: true
    },
    dataCadastro: {
        type: Date
    }
});

module.exports = mongoose.model('produto', schema);