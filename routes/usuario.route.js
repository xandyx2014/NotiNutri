const express = require('express');
const router = express();
const UsuarioCtrl = require('../controllers/usuario/usuario.controller');

router.get('/', UsuarioCtrl.index);
router.post('/', UsuarioCtrl.store);
router.post('/login', UsuarioCtrl.login);
router.put('/:id', UsuarioCtrl.update);


module.exports = router;