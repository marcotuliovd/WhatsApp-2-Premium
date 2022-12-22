module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('posts', {
    // eslint-disable-next-line camelcase
    user_id: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    curtidas: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
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