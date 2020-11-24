'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/pedido-repository');

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
    
    contract.isRequired(req.body.cliente, 'O cliente é obrigatorio');
    contract.isRequired(req.body.produtos, 'É obrigatorio ter um produto');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }
    
    var dia = new Date();

    try{       
        await repository.create({
            cliente: req.body.cliente,
            produtos: req.body.produtos,
            dataCadastro: dia.getDate()
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
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
            message: 'Pedido atualizado com sucesso!'
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
            message: 'Pedido removido com sucesso!'
        });
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
};