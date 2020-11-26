'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/pedido-repository');

exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res
            .status(200)
            .send({
                message: 'Sucesso',
                lista: data
            });
    }
    catch (e){
        res
            .status(500)
            .send({ message: 'Falha ao processar a requisição', e});
    }
};

exports.post = async(req, res, next) => {
    
    let contract =  new ValidationContract();
    
    contract.isRequired(req.body.cliente, 'Cliente é obrigatório');
    contract.isRequired(req.body.produtos, 'Produto é obrigatório');

    if(!contract.isValid()){
        res.status(401).send(contract.errors()[0]).end();
        return;
    }
    
    var dia = new Date();

    try{       
        var data = await repository.create({
            cliente: req.body.cliente,
            produtos: req.body.produtos,
            dataCadastro: dia
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!',
            retorno: data
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
        if(!req.body._id){
            res.status(401).send({
                message: 'Id não foi informado'
            });
            return;
        }
        
        var data = await repository.update(req.body);
        res.status(200).send({
            message: 'Pedido atualizado com sucesso!',
            retorno: data
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
            message: 'Pedido removido com sucesso!'
        });
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
};
