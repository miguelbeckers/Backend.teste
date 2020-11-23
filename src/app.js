'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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