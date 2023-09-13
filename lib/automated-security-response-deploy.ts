import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { awsSharrAdminStack } from '../lib/automated-security-response-admin';
import { awsSharrMemberRolesStack } from '../lib/automated-security-response-member-roles';
import { awsSharrMemberStack } from '../lib/automated-security-response-member';


export class awsSharrDeployStack extends Stack {
  constructor(scope: Construct) {
    super(scope, 'awsSharrDeployStack');

    const adminStack = new awsSharrAdminStack(this);
    const memberRolesStack = new awsSharrMemberRolesStack(this);
    memberRolesStack.addDependency(adminStack)

    const memberStack = new awsSharrMemberStack(this);
    memberStack.addDependency(adminStack)
    memberStack.addDependency(memberRolesStack)
  }
}