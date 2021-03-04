'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TypeWallets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TypeWallets');
  }
};
