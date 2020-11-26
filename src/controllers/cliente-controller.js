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

exports.getByName = async(req, res, next) => {
    try{
        if(!req.query.nome){
            res.status(401).send({
                message: 'Nome não foi informado'
            });
            return;
        }
        
        var data = await repository.getByName(req.query.nome);
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
        res.status(400).send(contract.errors()[0]).end();
        return;
    };

    var dia = new Date();

    try{       
        var data = await repository.create({
            nome: req.body.nome,
            dataNascimento: req.body.dataNascimento,
            dataCadastro: dia
        });
        res
            .status(201)
            .send({
                message: 'Cliente cadastrado com sucesso!',
                retorno: data
            });
    }
    catch (e){
        res.status(400).send({
            message: 'Falha ao processar a requisição'
        });
    };
};

exports.put = async(req, res, next) => {
    try{
        if(!req.body._id){
            res.status(401).send({
                message: 'Id não foi informado'
            });
            return;
        }
        
        var data = await repository.update(req.body);
        res
            .status(200)
            .send({
                message: 'Cliente atualizado com sucesso!',
                retorno: data
            }); 
    }
    catch (e){
        res.status(500).send({
            message: 'Falha na requisição'
        });
    };
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
    };
};