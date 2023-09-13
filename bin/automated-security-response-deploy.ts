#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { awsSharrDeployStack } from '../lib/automated-security-response-deploy';

const app = new App();
const asrDeployStack = new awsSharrDeployStack(app);
