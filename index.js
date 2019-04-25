const app = require('./app');
const config = require('./config/port.config');

app.listen(config.get('port'), () => {
  console.log(`Conexion Correcta escuchando en el puerto${config.get('port')}`);
});