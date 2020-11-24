'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/produto-repository');

exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(200).send(data);
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição', e
        });
    }
};

exports.post = async(req, res, next) => {
    let contract =  new ValidationContract();
    contract.hasMinLen(req.body.descricao, 3, 'A descricao deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.preco, 1, 'O preco deve conter pelo menos 1 caracteres');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{       
        await repository.create({
            descricao: req.body.descricao,
            preco: req.body.preco
        });
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição', e
        });
    }
};

exports.put = async(req, res, next) => {
    try{
        await repository.update(req.query.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        }); 
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição', e
        });
    } 
};

exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.query.id);
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
};