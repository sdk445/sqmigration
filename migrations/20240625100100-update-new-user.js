'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn("new_users","data")
    await queryInterface.addColumn("new_users","newone",{
      type: Sequelize.FLOAT,
      defaultValue: 3.14,
      allowNull: false,
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn("new_users","data",{
      type: Sequelize.FLOAT,
      defaultValue: 3.14,
      allowNull: false,
    })
    await queryInterface.removeColumn("new_users","newone",{
      type: Sequelize.FLOAT,
      defaultValue: 3.14,
      allowNull: false,
    })
  }
};
