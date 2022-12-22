'use strict';
module.exports = (sequelize, DataTypes) => {
  const coments = sequelize.define('Coments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    conteudo: DataTypes.STRING,
    curtidas: DataTypes.INTEGER,
    idPost: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, {
    timestamps: false,
    sequelize,
    underscored: true,
  });
  coments.associate = (models) => {
    coments.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'userId',
    });
    coments.belongsTo(models.Post, {
      as: 'Post',
      foreignKey: 'idPost',
    })
  }
  return coments;
};