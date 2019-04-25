'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inyeccion = sequelize.define('Inyeccion', {
    fecha_inyectada: DataTypes.DATE,
    fecha_sgte: DataTypes.DATE,
    vacuna_id: DataTypes.INTEGER,
    refuerzo_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    paciente_id: DataTypes.INTEGER
  }, {});
  Inyeccion.associate = function(models) {
    Inyeccion.belongsTo(models.Doctor, {
      foreignKey: 'doctor_id'
    });
    Inyeccion.belongsTo(models.Paciente, {
      foreignKey: 'paciente_id'
    });
    Inyeccion.belongsTo(models.Vacuna, {
      foreignKey: 'vacuna_id'
    })
    Inyeccion.belongsTo(models.Refuerzo, {
      foreignKey: 'refuerzo_id'
    })
  };
  return Inyeccion;
};