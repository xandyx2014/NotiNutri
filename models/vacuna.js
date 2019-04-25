'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vacuna = sequelize.define('Vacuna', {
    nombre: DataTypes.STRING,
    cura: DataTypes.STRING,
    detalle: DataTypes.STRING,
    cantidad: DataTypes.INTEGER
  }, {});
  Vacuna.associate = function(models) {
    Vacuna.hasMany( models.Inyeccion, {
      foreignKey: 'vacuna_id'
    });
  };
  return Vacuna;
};