import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as C19DServices from '../lib/c19d-services-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new C19DServices.C19DServicesStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
