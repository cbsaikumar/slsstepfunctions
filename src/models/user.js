const UserModel = (sequelize, type) => {
    return sequelize.define('user', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: type.STRING,
      role: type.STRING
    })
  }

module.exports = UserModel;