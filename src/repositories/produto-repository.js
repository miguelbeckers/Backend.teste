'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('produto');

exports.get = async() => {
    const res = await Produto.find();
    return res;
};

exports.getByDescricao = async(descricao) => {
    const res = await Produto
        .findOne({
            descricao: descricao
        });
    return res;
}

exports.create = async(data) => {
    var produto = new Produto(data);
    await produto.save();
    return produto;
};

exports.update = async(data) => {
    var res = await Produto
        .findByIdAndUpdate(data._id, {
            $set: {
                descricao: data.descricao,
                preco: data.preco
            }
        }, { new: true });
    return res;
};

exports.delete = async(id) => {
    await Produto.findOneAndRemove(id);
};
