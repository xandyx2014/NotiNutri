const { Doctor } = require('../../models');                
                           
function index(req, res) {
  const id = req.params.id;
  Doctor.findOne({
    where: { id: id}
  }).then( resp => {
    return res.status(200).json({
      ok: true,
      data: resp
    });
  });
}
                    
                            
module.exports = {
  index
};