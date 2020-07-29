function authorize(event, context, callback){
  // if(config.key.split('Bearer ')[1] === 'myapikey'){
  //     return {
  //         statusCode: 200,
  //         body: 'No results',
  //       };
  // } else{
  //     console.log('error');
  //     return new Error('error message');
  // }
  var authResponse = {
    statusCode: 200,
    firstData: 'Authorized'
  }
  callback(null, authResponse);
};

module.exports = { authorize };
