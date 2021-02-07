#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {C19dPipelineStack} from './lib/c19d-pipeline-stack';

const app = new cdk.App();
new C19dPipelineStack(app, 'C19DServicesStack', {env: {region: 'eu-south-1'}});
