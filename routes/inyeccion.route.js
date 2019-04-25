const express = require('express');
const router = express();
const InyeccionCtrl = require('../controllers/inyeccion/inyeccion.controller');

router.post('/' , InyeccionCtrl.store);
router.get('/:id' , InyeccionCtrl.index);
router.get('/:id/vacunas' , InyeccionCtrl.indexVacuna);
router.get('/:id/vacunas/:pacienteId/pacientes' , InyeccionCtrl.vacunaIndex);

module.exports = router;