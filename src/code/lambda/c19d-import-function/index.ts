import {APIGatewayProxyHandler} from 'aws-lambda';

export const handler: APIGatewayProxyHandler = event => {
  return Promise.resolve({
    statusCode: 200,
    body: JSON.stringify(event),
  });
};
