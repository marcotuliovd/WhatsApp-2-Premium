module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    userName: DataTypes.STRING,
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    email: DataTypes.STRING,
    icon: DataTypes.STRING,
    verification: DataTypes.BOOLEAN,
  }, {
    sequelize,
    // modelName: 'user',
    underscored: true,
    // tableName: 'users',
  });
  user.associate = (models) => {
    user.hasMany(models.post, {
      as: 'posts',
      foreignKey: 'user_id',
    })
  }
  user.associate = (models) => {
    user.hasMany(models.coments, {
      as: 'coments',
      foreignKey: 'user_id',
    })
  }
  return user;
};