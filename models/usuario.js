'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    usuario: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
    Usuario.hasMany( models.Doctor, {
      foreignKey: 'usuario_id'
    });
    Usuario.hasMany( models.Paciente, {
      foreignKey: 'usuario_id'
    });
  };
  return Usuario;
};