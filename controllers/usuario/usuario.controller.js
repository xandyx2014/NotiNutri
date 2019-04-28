const { Usuario, Doctor, Paciente } = require('../../models');               
const bcrypt = require('bcrypt-nodejs');
const { createToken } = require('../../services/jwt.service');                           
function index(req, res) {
  Usuario.findAll().then( resp => {
    return res.status(200).json({
      ok: true,
      data: resp
    })
  });
  
}
                           
function store(req, res) {
  // console.log(Doctor.rawAttributes);
  const { 
    usuario,
    password,
    nombre,
    ci,
    edad,
    telefono,
    correo,
    turno,
   } = req.body;
   const hash = bcrypt.hashSync(password);
   Usuario.findAll({
     where: { usuario: usuario}
   }).then( usuarioResp => {
     if (usuarioResp.length === 0) {
      Usuario.create({
        usuario,
        password: hash
      }).then( user => {
        if (user.length !== 0) {
          if (turno) {
            Doctor.create({
              nombre,
              ci,
              edad,
              telefono,
              correo,
              turno,
              usuario_id: user.id
            }).then( doctorResp => {
              return res.status(200).json({
                ok: true,
                data: doctorResp
              });
            });
          } else {
            Paciente.create({
              nombre,
              ci,
              edad,
              telefono,
              correo,
              usuario_id: user.id
            }).then( doctorResp => {
              return res.status(200).json({
                ok: true,
                data: doctorResp
              });
            });
          }
        } else {
          return res.status(200).json({
            ok: false,
            message: 'ha ocurrido un error'
          });
        }
        
      });
     } else {
      return res.status(200).json({
        ok: false,
        message: 'El nombre del usuario ya Existe'
      });
     }
    
   })
   
}
function login(req, res) {
  const tipo = req.query.tipo || '';
  const {
    usuario,
    password
  } = req.body;
  Usuario.findOne({
    where: { usuario: usuario}
  }).then( usuarioResp => {
    if (!usuarioResp) {
      return res.status(200).json({
        ok: false,
        message: 'el usuario no existe'
      });
    } else {
      bcrypt.compare(password, usuarioResp.password, function(err, resOk) {        
        usuarioResp.password = '...';
        if (resOk) {
          if (tipo == 'doctor') {
            Doctor.findOne({ where: {usuario_id: usuarioResp.id}}).then( respDoctor => {
              if (respDoctor) {
                const tokenDoctor =  createToken(respDoctor, 'doctor');
                return  res.status(200).json({
                  ok: true,
                  data: respDoctor,
                  token: tokenDoctor
                });
              } else {
                return  res.status(200).json({
                  ok: false,
                  message: 'No se ha encontrado el usuario'
                });
              }
            }).catch( errorConection => {
              return res.status(200).json({
                ok: false,
                error: errorConection
              });
            });
          } else {
            Paciente.findOne({ where: {usuario_id: usuarioResp.id}}).then( resPaciente => {
              if (resPaciente) {
                const tokenPaciente =  createToken(resPaciente, 'paciente');
                return  res.status(200).json({
                  ok: true,
                  data: resPaciente,
                  token: tokenPaciente
                });
              } else {
                return  res.status(200).json({
                  ok: false,
                  message: 'No se ha encontrado el usuario'
                });
              }
              
            }).catch( errorConection => {
              return res.status(200).json({
                ok: false,
                error: errorConection
              });
            });
          }
        } else {
          return res.status(200).json({
            ok: false,
            error: 'Error Al loguear al usuario'
          });
        }
        
      });
    }
  });
}            
function show(req, res) {}
                           
function destroy(req, res) {}
                           
function update(req, res) {
  const { turno } = req.body;
  const id = req.params.id;
  if (turno) {
    Doctor.update({
      ...req.body,
    }, { where: { id: id} }).then( doctorResp => {
      buscarUsuario(res, id, 'doctor');
    });
  } else {
    Paciente.update({
      ...req.body,
    }, { where: { id: id}}).then( pacienteResp => {
      buscarUsuario(res, id, 'paciente');
    });
  }
}
function buscarUsuario(res, id, tipo) {
  id = Number(id);
  if (tipo === 'doctor') {
    Doctor.findOne({ where: { id: id}}).then( resp => {
      return res.status(200).json({
        ok: true,
        data: resp
      });
    });
  } else {
    Paciente.findOne({ where: { id: id}}).then( resp => {
      return res.status(200).json({
        ok: true,
        data: resp
      });
    });
  }
}
                            
module.exports = {
  index,
  store,
  show,
  login, 
  destroy,
  update, 
};