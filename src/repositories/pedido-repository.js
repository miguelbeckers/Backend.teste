'use strict';

const mongoose = require('mongoose');
const Pedido = mongoose.model('pedido');

exports.get = async(data) => {
    var res = await Pedido.find({})
    return res;
}

exports.create = async(data) => {
    var pedido = new Pedido(data);
    await pedido.save();
}

exports.update = async(id, data) => {
    await Pedido
        .findByIdAndUpdate(id, {
            $set: {
                produto: data.produto.id,
                descricao: data.descricao,
                quantidade: data.quantidade,
                preco: data.preco
            }
        });
}

exports.delete = async(id) => {
    await Pedido.findOneAndRemove(id);
}