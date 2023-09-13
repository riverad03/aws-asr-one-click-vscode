import { NestedStack, NestedStackProps} from 'aws-cdk-lib';
import { getConfig } from '../config';
import * as path from 'path';
import * as cfninc from 'aws-cdk-lib/cloudformation-include';
import { Construct } from 'constructs';
import { CfnTopic, Topic } from 'aws-cdk-lib/aws-sns';
import { EmailSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';

interface ResourceNestedStackProps extends NestedStackProps {
  readonly load_PCI321_member_stack : string;
  readonly load_CIS120_member_stack : string;
  readonly load_AFSBP_member_stack : string;
  readonly reuse_orchestrator_log_group : string;
}

export class awsSharrAdminStack extends NestedStack {
  constructor(scope: Construct) {
    super(scope, 'awsSharrAdminStack');

    const config = getConfig();

    const StacksProps : ResourceNestedStackProps = { 
      load_PCI321_member_stack : "no", //config.asrLoadPCI321MemberStack
      load_CIS120_member_stack : "no", //config.asrLoadCIS120MemberStack
      load_AFSBP_member_stack : "yes", //config.asrLoadAFSBPMemberStack
      reuse_orchestrator_log_group : "no", //config.asrReuseOrchestratorLogGroup
    }

    const template = new cfninc.CfnInclude(this, 'Template', { 
      templateFile: path.join(process.cwd(), 'resources', 'aws-sharr-deploy.yml'),
      parameters: {
        'LoadAFSBPAdminStack': StacksProps.load_AFSBP_member_stack,
        'LoadCIS120AdminStack': StacksProps.load_CIS120_member_stack,
        'LoadPCI321AdminStack': StacksProps.load_PCI321_member_stack,
        'ReuseOrchestratorLogGroup': StacksProps.reuse_orchestrator_log_group,
      },
    });

    const emailAddress = config.alertEmail
    const adminCfnSNSTopic = template.getResource('SHARRTopic229CFB9E') as CfnTopic;
    const topic_arn = adminCfnSNSTopic.ref
    const emailTopic = Topic.fromTopicArn(this, 'SO0111-SHARR_Topic', topic_arn)
    emailTopic.addSubscription(new EmailSubscription(emailAddress))
  }
}