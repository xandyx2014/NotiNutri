const express = require('express');
const router = express();
const VacunaCtrl = require('../controllers/vacuna/vacuna.controller');

router.post('/', VacunaCtrl.store);
router.get('/', VacunaCtrl.show);

module.exports = router;