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

exports.update = async(data) => {
    await Cliente
        .useFindAndModify(data.id, {
            $set: {
                nome: data.nome,
                dataNascimento: data.dataNascimento
            }
        });
    return Cliente
}

exports.delete = async(id) => {
    await Cliente.findOneAndRemove(id);
};