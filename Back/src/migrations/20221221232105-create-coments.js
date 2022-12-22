module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      conteudo: {
        type: Sequelize.STRING
      },
      curtidas: {
        type: Sequelize.INTEGER
      },
      id_post: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coments');
  }
};