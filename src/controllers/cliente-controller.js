'use strict'

const mongoose = require('mongoose');
const Cliente = mongoose.model('cliente');

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
    res.status(201).send(req.body);
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