const jwt = require('jwt-simple');
const moment = require('moment');

const config = require('../config/port.config');
const createToken = (user, tipo) => {
  const payload = {
    id: user.id,
    nombre: user.nombre,
    ci: user.ci,
    telefono: user.telefono,
    correo: user.correo,
    usuario_id: user.usuario_id,
    tipo: tipo,
    iat: moment().unix(),
    exp: moment().add(30, 'days')
  };
  return jwt.encode(payload, config.get('clave'));
}
module.exports = {
  createToken
};