'use strict';

const mongoose = require('mongoose');
const Pedido = mongoose.model('pedido');

exports.get = async(data) => {
    var res = await Pedido.find({})
    return res;
};

exports.create = async(data) => {
    var pedido = new Pedido(data);
    await pedido.save();
    return pedido;
};

exports.update = async(data) => {

    var res = await Pedido
        .findByIdAndUpdate(data._id, {
            $set: {
                cliente: data.cliente,
                produtos: data.produtos
            }
        }, { new: true });
    return res;
};

exports.delete = async(id) => {
    await Pedido.findOneAndRemove(id);
};