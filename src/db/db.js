const { Sequelize } = require("sequelize");
const ProjectModel = require("../models/project");

const sequelize = new Sequelize({
  dialect: "postgres",
  url:
    "postgres://xkhjuawh:JarrKriIkmXgVoKeRahzyvCZNLcpF_Ff@ruby.db.elephantsql.com:5432/xkhjuawh",
});

const Project = ProjectModel(sequelize, Sequelize);
const Models = { Project };
const connection = {
  isConnected: false,
};

const connect = async () => {
  if (connection.isConnected) {
    console.log("=> Using existing connection.");
    return Models;
  }

  await sequelize.sync();
  await sequelize.authenticate();
  connection.isConnected = true;
  console.log("=> Created a new connection.");
  return Models;
};

module.exports = connect;
