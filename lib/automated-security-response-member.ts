import { NestedStack, NestedStackProps } from 'aws-cdk-lib';
import { getConfig } from '../config';
import * as path from 'path';
import * as cfninc from 'aws-cdk-lib/cloudformation-include';
import { Construct } from 'constructs';

interface ResourceNestedStackProps extends NestedStackProps {
  readonly security_hub_admin_account : string;
  readonly log_group_name : string;
  readonly load_PCI321_member_stack : string;
  readonly load_CIS120_member_stack : string;
  readonly load_AFSBP_member_stack : string;
  readonly create_s3_bucket_for_redshift_audit_logging : string;
}

export class awsSharrMemberStack extends NestedStack {
  constructor(scope: Construct) {
    super(scope, 'awsSharrMemberStack');

    const config = getConfig();

    const StacksProps : ResourceNestedStackProps = {
      security_hub_admin_account : '<account_number>', //config.Account
      log_group_name : 	"asr-member-cft-metricfilters-alarms", //config.asrLogGroupName - have to look to see if the account has a CW Log Grp 
      load_PCI321_member_stack : "no", //config.asrLoadPCI321MemberStack
      load_CIS120_member_stack : "no", //config.asrLoadCIS120MemberStack
      load_AFSBP_member_stack : "yes", //config.asrLoadAFSBPMemberStack
      create_s3_bucket_for_redshift_audit_logging : "no", //config.asrCreateS3BucketForRedshiftAuditLogging
    }

    const template = new cfninc.CfnInclude(this, 'Template', { 
      templateFile: path.join(process.cwd(), 'resources', 'aws-sharr-member.yml'), 
      parameters: {
        'SecHubAdminAccount': StacksProps.security_hub_admin_account,
        'LogGroupName': StacksProps.log_group_name,
        'LoadPCI321MemberStack': StacksProps.load_PCI321_member_stack,
        'LoadCIS120MemberStack': StacksProps.load_CIS120_member_stack,
        'LoadAFSBPMemberStack': StacksProps.load_AFSBP_member_stack,
        'CreateS3BucketForRedshiftAuditLogging': StacksProps.create_s3_bucket_for_redshift_audit_logging,
      },
    });
  }
}

