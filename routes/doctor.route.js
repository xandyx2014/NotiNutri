const express = require('express');
const router = express();
const DoctorCtrl = require('../controllers/doctor/doctor.controller');

router.get('/:id' , DoctorCtrl.index);


module.exports = router;