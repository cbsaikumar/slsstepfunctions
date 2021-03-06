import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda';
import connectToDatabase from './db/db';

interface Response {
  statusCode: number;
  body: string;
}

export const getData: Handler = async (event: any, context: Context, callback: Callback) => {
  const response: any = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Get Data function'
      },
      null,
      2
    ),
  };

  return response;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

export const postData: Handler = async (event: any, context: Context, callback: Callback) => {
  const response: any = {
    statusCode: 200,
    event,
    context,
    body: JSON.stringify(
      {
        message: 'Post Data function'
      },
      null,
      2
    ),
  };

  console.log('token', event.headers.Autherization);

  return response;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

export const sayHello: Handler = async (event: any, context: Context, callback: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello function'
      },
      null,
      2
    ),
  };

  return response;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

export const healthCheck = async () => {
  await connectToDatabase()
  console.log('Connection successful.')
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Connection successful.' })
  }
}
