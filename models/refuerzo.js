'use strict';
module.exports = (sequelize, DataTypes) => {
  const Refuerzo = sequelize.define('Refuerzo', {
    fecha: DataTypes.STRING
  }, {});
  Refuerzo.associate = function(models) {
    Refuerzo.hasMany( models.Inyeccion, {
      foreignKey: 'refuerzo_id'
    });
  };
  return Refuerzo;
};