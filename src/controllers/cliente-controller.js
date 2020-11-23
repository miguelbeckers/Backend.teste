'use strict'

const mongoose = require('mongoose');
const Cliente = mongoose.model('cliente');

exports.get = (req, res, next) => {
    Cliente
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
    let cliente = new Cliente(req.body);
    cliente
        .save()
        .then(x => {
            res.status(201).send({ message: 'Cliente cadastrado com sucesso!'});
        })
        .catch(e => {
            res.status(400).send({ message: 'Falha ao cadastrar o cliente', data: e});
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