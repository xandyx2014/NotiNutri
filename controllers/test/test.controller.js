



function prueba(req, res) {
  res.status(200).json({
    message: 'Hola mundo follow controller',
    data: req.user
  });
}

module.exports =  prueba;