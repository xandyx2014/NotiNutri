const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/', require('./routes/test.route'));
app.use('/test', require('./routes/test.route'));
app.use('/usuarios', require('./routes/usuario.route'));
app.use('/pacientes', require('./routes/paciente.route'));
app.use('/vacunas', require('./routes/vacuna.route'));
app.use('/refuerzos', require('./routes/refuerzo.route'));
app.use('/inyeciones', require('./routes/inyeccion.route'));

module.exports = app;  