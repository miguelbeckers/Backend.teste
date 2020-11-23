'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://miguelbeckers:ReSQSPag7k8VjQCB@ndstr.exesl.mongodb.net/backend-test?retryWrites=true&w=majority');

const Produto = require('./models/produto');
const Cliente = require('./models/cliente');
const Pedido = require('./models/pedido');

const index = require('./routes/index-route');
const produto = require('./routes/produto-route');
const cliente = require('./routes/cliente-route');
const pedido = require('./routes/pedido-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/produtos', produto);
app.use('/clientes', cliente);
app.use('/pedidos', pedido);

module.exports = app;