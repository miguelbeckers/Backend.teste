'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('produto');

exports.get = async() => {
    const res = await Produto.find();
    return res;
}

exports.create = async(data) => {
    var produto = new Produto(data);
    await produto.save();
}

exports.update = async(id, data) => {
    await Produto
        .findByIdAndUpdate(id, {
            $set: {
                descricao: data.descricao,
                preco: data.preco
            }
        });
}

exports.delete = async(id) => {
    await Produto.findOneAndRemove(id);
}
