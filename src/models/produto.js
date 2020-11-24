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
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('produto', schema);