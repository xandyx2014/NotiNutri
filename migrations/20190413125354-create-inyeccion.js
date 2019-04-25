'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inyeccions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_inyectada: {
        type: Sequelize.DATE
      },
      fecha_sgte: {
        type: Sequelize.DATE
      },
      vacuna_id: {
        type: Sequelize.INTEGER
      },
      refuerzo_id: {
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER
      },
      paciente_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Inyeccions');
  }
};