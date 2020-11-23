'use strict'

const mongoose = require('mongoose');
const Produto = mongoose.model('produto');

exports.get = (req, res, next) => {
    Produto
        .find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            console.log(e);
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    let produto = new Produto(req.body);
    produto
        .save()
        .then(x => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!'});
        })
        .catch(e => {
            res.status(400).send({ message: 'Falha ao cadastrar o produto', data: e});
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
}

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};