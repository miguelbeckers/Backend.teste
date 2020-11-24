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
    Produto
        .findByIdAndUpdate(req.params.id, {
            $set: {
                descricao: req.body.descricao,
                preco: req.body.preco
            }
        })
        .then(data => {
            res.status(200).send({ message: 'Produto atualizado com sucesso!' });
        })
        .catch(e => {
            res.status(400).send({ message: 'Falha ao atualizar o produto', data: e });
        });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};