const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/port.config');

const ensureAuth = function (req, res, next) {
  let payload;
  if (!req.headers.authorization) {
    return res.status(403).json({
      ok: false,
      message: 'falta la cabezera de autenticacion'
    });
  }
  const token = req.headers.authorization.replace(/['"]+/g, '');
  try {
    payload = jwt.decode(token, config.get('clave'));
    if (payload.exp <= moment().unix()) {
      return res.status(401).json({
        ok: false,
        message: 'token expirado'
      });
    }
  } catch (error) {

    return res.status(404).json({
      ok: false,
      message: 'token no es valido',
      error
    });

  }
  req.user = payload;
  next();

}

module.exports = {
  ensureAuth
}