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

exports.getByDescricao = async(req, res, next) => {
    try{
        if(!req.query.descricao){
            res.status(401).send({
                message: 'Descrição não informada'
            });
            return;
        }
        
        var data = await repository.getByDescricao(req.query.descricao);
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
    contract.isRequired(req.body.descricao, 'Descrição Produto é obrigatório');
    contract.isRequired(req.body.preco, 'O preço é obrigatorio');

    if(!contract.isValid()){
        res.status(400).send(contract.errors()[0]).end();
        return;
    };

    var dia = new Date();

    try{       
        var data = await repository.create({
            descricao: req.body.descricao,
            preco: req.body.preco,
            dataCadastro: dia
        });
        res
            .status(201)
            .send({
                message: 'Produto cadastrado com sucesso!',
                retorno: data
            });
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição', e
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
                message: 'Produto atualizado com sucesso!',
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
            message: 'Produto removido com sucesso!'
        });
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
};