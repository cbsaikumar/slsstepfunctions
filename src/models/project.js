const ProjectModel = (sequelize, type) => {
    return sequelize.define('project', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: type.STRING
    })
  }

module.exports = ProjectModel;