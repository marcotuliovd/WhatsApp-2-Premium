'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userName: DataTypes.STRING,
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    email: DataTypes.STRING,
    icon: DataTypes.STRING,
    verification: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    // modelName: 'user',
    underscored: true,
    // tableName: 'users',
  });
  user.associate = (models) => {
    user.hasMany(models.Post, {
      as: 'posts',
      foreignKey: 'user_id',
    })
  }
  user.associate = (models) => {
    user.hasMany(models.Coments, {
      as: 'coments',
      foreignKey: 'user_id',
    })
  }
  return user;
};