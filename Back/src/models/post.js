'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('Post', {
    // eslint-disable-next-line camelcase
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    curtidas: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    sequelize,
    modelName: 'post',
    underscored: true,
  })
  post.associate = (models) => {
    post.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'userId',
    })
  }
  return post;
};