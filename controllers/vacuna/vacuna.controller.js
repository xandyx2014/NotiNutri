const { Vacuna } = require('../../models');

                           
                           
function index(req, res) {}
                           
function store(req, res) {
  const { 
    nombre,
    cura,
    detalle,
    cantidad
  } = req.body;
  Vacuna.create({
    nombre, cura, detalle, cantidad
  }).then( resp => {
    return res.status(200).json({
      ok: true,
      data: resp
    });
  });
}
                           
function show(req, res) {
  Vacuna.findAll()
  .then( resp => {
    return res.status(200).json({
      ok: true,
      data: resp
    });
  });
}
                           
function destroy(req, res) {}
                           
function update(req, res) {}
                            
module.exports = {
  index,
  store,
  show, 
  destroy,
  update, 
};