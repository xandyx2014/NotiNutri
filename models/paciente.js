'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    nombre: DataTypes.STRING,
    ci: DataTypes.STRING,
    edad: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {});
  Paciente.associate = function(models) {
    // associations can be defined here
    Paciente.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id'
    });
    Paciente.hasMany(models.Inyeccion, {
      foreignKey: 'paciente_id'
    });
  };
  return Paciente;
};