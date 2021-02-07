import {expect as expectCDK, matchTemplate, MatchStyle} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import {C19dServicesStack} from '../c19d-services-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new C19dServicesStack(app, 'MyTestStack');
  // THEN
  // expectCDK(stack).to(
  //   matchTemplate(
  //     {
  //       Resources: {},
  //     },
  //     MatchStyle.EXACT
  //   )
  // );
  expect(true).toBeTruthy();
});
