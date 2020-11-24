'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'cliente',
        required: true
    },
    produtos: [{
        produto: {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'produto',
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        quantidade: {
            type: Number,
            required: true
        },
        preco: {
            type: Number,
            required: true
        }
    }]
});

module.exports = mongoose.model('pedido', schema);