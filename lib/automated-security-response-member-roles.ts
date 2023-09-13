import { NestedStack, NestedStackProps } from 'aws-cdk-lib';
import { getConfig } from '../config';
import * as path from 'path';
import * as cfninc from 'aws-cdk-lib/cloudformation-include';
import { Construct } from 'constructs';

interface ResourceNestedStackProps extends NestedStackProps {
  readonly security_hub_admin_account : string;
}

export class awsSharrMemberRolesStack extends NestedStack {
  constructor(scope: Construct) {
    super(scope, 'awsSharrMemberRolesStack');

    const config = getConfig();

    const StacksProps : ResourceNestedStackProps = {
      security_hub_admin_account : '<account_number>', //config.Account
    }

    const template = new cfninc.CfnInclude(this, 'Template', { 
      templateFile: path.join(process.cwd(), 'resources', 'aws-sharr-member-roles.yml'),
      parameters: {
        'SecHubAdminAccount': StacksProps.security_hub_admin_account,
      },
    });
  }
}