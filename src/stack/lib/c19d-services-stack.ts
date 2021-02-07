import {resolve} from 'path';
import * as cdk from '@aws-cdk/core';
import {NodejsFunction} from '@aws-cdk/aws-lambda-nodejs';
import {Rule, Schedule} from '@aws-cdk/aws-events';
import {LambdaFunction} from '@aws-cdk/aws-events-targets';

export class C19DServicesStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const importFunction = new NodejsFunction(this, 'c19d-import-function', {
      entry: resolve(
        __dirname,
        '../../code/lambda/c19d-import-function/index.ts'
      ),
      handler: 'index.handler',
    });

    const updateRule = new Rule(this, 'c19d-update-rule', {
      ruleName: 'c19d-update-rule',
      schedule: Schedule.cron({minute: '0', hour: '18'}),
    });

    updateRule.addTarget(new LambdaFunction(importFunction));
  }
}
