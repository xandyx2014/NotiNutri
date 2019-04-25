const express = require('express');
const router = express();
const RefuerzoCtrl = require('../controllers/refuerzo/refuerzo.controller');

router.post('/', RefuerzoCtrl.store);
router.get('/', RefuerzoCtrl.show);

module.exports = router;