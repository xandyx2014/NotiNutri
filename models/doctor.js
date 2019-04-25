'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    nombre: DataTypes.STRING,
    ci: DataTypes.STRING,
    edad: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    turno: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {});
  Doctor.associate = function(models) {
    // associations can be defined here
    Doctor.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id'
    });
    Doctor.hasMany(models.Inyeccion, {
      foreignKey: 'doctor_id'
    });
  };
  return Doctor;
};