const { Inyeccion, Consulta, Paciente, Vacuna, Refuerzo } = require('../../models'); 
                           
function index(req, res) {
  const { id } = req.params;
  Paciente.findOne({
    where: { id: id },
    include: [
      {
        model: Inyeccion/* ,
        where: { cliente_id: id } */
      }
    ]
  })
    .then( resp => {
      return res.status(200).json({
        ok: true,
        data: resp
      })
    });
}
function vacunaIndex(req, res) {
  const { id } = req.params;
  const { pacienteId } = req.params;
  Vacuna.findOne({
     where: { id: id },
     include: [
       {
         model: Inyeccion,
         where: { paciente_id: pacienteId }
       }
     ]
   })
     .then( resp => {
       return res.status(200).json({
         ok: true,
         data: resp
       })
     });
}
function indexVacuna(req, res) {
  const { id } = req.params;
  Vacuna.findAll({
   /*  where: { id: id }, */
    include: [
      {
        model: Inyeccion,
        where: { paciente_id: id }
      }
    ]
  })
    .then( resp => {
      return res.status(200).json({
        ok: true,
        data: resp
      })
    });
}
                           
function store(req, res) {
  const {
    fecha_inyectada,
    fecha_sgte,
    doctor_id,
    paciente_id,
    vacuna_id,
    refuerzo_id,
  } = req.body;
  Inyeccion.create({
    fecha_inyectada,
    fecha_sgte,
    doctor_id,
    paciente_id,
    vacuna_id,
    refuerzo_id,
  }).then( resp => {
    return res.status(200).json({
      ok: true,
      data: resp
    });
  });
}
                           
function show(req, res) {}
                           
function destroy(req, res) {}
                           
function update(req, res) {}
                            
module.exports = {
  index,
  store,
  show, 
  destroy,
  update,
  indexVacuna,
  vacunaIndex
};