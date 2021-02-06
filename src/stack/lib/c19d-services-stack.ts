import {resolve} from 'path';
import * as cdk from '@aws-cdk/core';
import {NodejsFunction} from '@aws-cdk/aws-lambda-nodejs';

export class C19DServicesStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const importFunction = new NodejsFunction(this, 'c19d-import-function', {
      entry: resolve(__dirname, '../../code/lambda/'),
      handler: 'index.handler',
    });
  }
}
