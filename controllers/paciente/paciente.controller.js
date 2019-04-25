const { Paciente } = require('../../models');                 
                           
function index(req, res) {
  const id = req.params.id;
  Paciente.findOne({
    where: {id: id}
  }).then( resp => {
    return res.status(200).json({
      ok: true,
      data: resp
    });
  });
}
                           
function store(req, res) {}
                           
function show(req, res) {
  Paciente.findAll().then( resp => {
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