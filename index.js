const app = require('./app');
const config = require('./config/port.config');

app.listen(config.get('port') || 3000, () => {
  console.log(`Conexion Correcta escuchando en el puerto${config.get('port')}`);
});