// const { connectToDatabase } = require('../db/db');
function getAllProjects(event, context, callback) {
  var response = {
    statusCode: 200,
    body: JSON.stringify({data: 'get all projects', event}),
  }
  callback(null, response);
}

module.exports = { getAllProjects }
