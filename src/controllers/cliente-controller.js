'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/cliente-repository');

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
    contract.hasMinLen(req.body.nome, 1, 'Nome Cliente é obrigatório');
    contract.hasMinLen(req.body.dataNascimento, 1, 'A data de nascimento nao pode estar vazia');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{       
        await repository.create({
            nome: req.body.nome,
            dataNascimento: req.body.dataNascimento
        });
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    }
    catch (e){
        res.status(400).send({
            message: 'Falha ao processar a requisição', e
        });
    }
};

exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Cliente atualizado com sucesso!'
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
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Cliente removido com sucesso!'
        });
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição', e
        });
    }
};