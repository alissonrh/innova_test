const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    whatsApp: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;