'use strict'

// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// connect do banco
mongoose.connect(config.connectionString);

// import dos modelos
const Produto = require('./models/produto');
const Cliente = require('./models/cliente');
const Pedido = require('./models/pedido');

// import das rotas
const index = require('./routes/index-route');
const produto = require('./routes/produto-route');
const cliente = require('./routes/cliente-route');
const pedido = require('./routes/pedido-route');

// controle json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// definicao das rotas
app.use('/', index);
app.use('/produtos', produto);
app.use('/clientes', cliente);
app.use('/pedidos', pedido);

module.exports = app;