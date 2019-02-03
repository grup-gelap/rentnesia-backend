'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name : DataTypes.STRING,
    birth_date: DataTypes.DATE,
    gender: DataTypes.ENUM('m', 'f'),
    home_address: DataTypes.STRING,
    province_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    zip_code: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'customer')
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};