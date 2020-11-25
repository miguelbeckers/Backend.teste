'use strict';

const mongoose = require('mongoose');
const Cliente = mongoose.model('cliente');

exports.get = async() => {
    const res = await Cliente.find();
    return res;
}

exports.create = async(data) => {
    var cliente = new Cliente(data);
    await cliente.save();
    return cliente;
}

exports.update = async(id, data) => {
    await Cliente
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                dataNascimento: data.dataNascimento
            }
        });
}

exports.delete = async(id) => {
    await Cliente.findOneAndRemove(id);
};