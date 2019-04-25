const express = require('express');
const router = express();
const testController = require('../controllers/test/test.controller');
const auth = require('../middleware/auth.middleware');

router.get('/', auth.ensureAuth ,testController);

module.exports = router;