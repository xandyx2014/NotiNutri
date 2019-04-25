const express = require('express');
const app = express();

app.set('port', 3000);
app.set('clave', 'mi clave secreta');

module.exports = app;