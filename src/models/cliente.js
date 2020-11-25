'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: (true, "Nome Cliente é obrigatório")
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    dataCadastro: {
        type: Date,
    }
});

module.exports = mongoose.model('cliente', schema);