'use strict';

const mongoose = require('mongoose');
const Cliente = mongoose.model('cliente');

exports.get = async() => {
    const res = await Cliente.find();
    return res;
}

exports.getByName = async(nome) => {
    const res = await Cliente
        .findOne({
            nome: nome
        });
    return res;
}

exports.create = async(data) => {
    var cliente = new Cliente(data);
    await cliente.save();
    return cliente;
}

exports.update = async(data) => {
    var res = await Cliente
        .findByIdAndUpdate(data._id,{
            $set: {
                nome: data.nome,
                dataNascimento: data.dataNascimento
            }
        }, { new: true });
    return res;
}

exports.delete = async(id) => {
    await Cliente.findOneAndRemove(id);
};