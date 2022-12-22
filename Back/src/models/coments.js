module.exports = (sequelize, DataTypes) => {
  const coment = sequelize.define('coments', {
    user_id: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    curtidas: DataTypes.INTEGER,
    id_post: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coments',
    underscored: true,
  });
  coments.associate = (models) => {
    post.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'userId',
    })
  }
  coments.associate = (models) => {
    post.belongsTo(models.Post, {
      as: 'Post',
      foreignKey: 'postId',
    })
  }
  return coments;
};