'use strict';

const { mongo } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'cliente'
    },
    produtos: [{
        produto: {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'produto'
        },
        descricao: {
            type: mongoose.Schema.Types.descricao,
            ref: 'produto'
        },
        quantidade: {
            type: Number,
            required: true
        },
        preco: {
            type: Number, // verificar
            required: true
        }
    }]
});

module.exports = mongoose.model('produto', schema);