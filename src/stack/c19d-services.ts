#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { C19DServicesStack } from '../lib/c19d-services-stack';

const app = new cdk.App();
new C19DServicesStack(app, 'C19DServicesStack');
