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
};

exports.update = async(id, data) => {
    await Pedido
        .findByIdAndUpdate(id, {
            $set: {
                cliente: req.body.cliente,
                produtos: req.body.produtos
            }
        });
};

exports.delete = async(id) => {
    await Pedido.findOneAndRemove(id);
};