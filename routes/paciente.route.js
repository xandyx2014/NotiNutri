const express = require('express');
const router = express();
const PacienteCtrl = require('../controllers/paciente/paciente.controller');

router.get('/', PacienteCtrl.show);
router.get('/:id', PacienteCtrl.index);

module.exports = router;