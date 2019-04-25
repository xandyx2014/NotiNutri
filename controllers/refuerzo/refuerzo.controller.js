const { Refuerzo } = require('../../models');

                           
                           
function index(req, res) {}
                           
function store(req, res) {
  const { fecha } = req.body;
  Refuerzo.create({ fecha }).then( resp => {
    return res.status(200).json({
      ok: true,
      data: resp
    });
  });
}
                           
function show(req, res) {
  Refuerzo.findAll()
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