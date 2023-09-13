import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Config } from '.';
import { allowIpCidrs } from './allowIps';
import { dnsRecords } from './developmentDns';

const dbIngressCidrs: { [key: string]: string } = {
  'Allow from Gitlab (docker-k8s) nat-gw.appsgit-runners.jw-cd-orchestration-prd.10aws.org to RDS': '3.223.148.148/32',
  'Allow from Gitlab (docker-linux) to RDS': '35.168.78.108/32',
  'Allow from the k8s cluster to RDS': '52.204.71.3/32',
  'Allow from the US branch to RDS': '208.74.140.0/22',
  'Allow from the Brazil branch to RDS': '138.59.56.0/22',
  'Allow from the South Africa branch to RDS': '169.239.28.0/22',
};

const domainNameCerts: { [key: string]: string } = {
  CertificateWazuhArn: 'dev-wazuh.stream-dev.jw.org',
};

export const development: Config = {
  alertEmail: '9b713584.jwsite.onmicrosoft.com@amer.teams.ms',
  awsAccount: '378004910391',
  awsRegion: process.env.AWS_REGION || 'us-east-1',
  allowIps: allowIpCidrs,
  dbIngressCidrs,
  dbPort: '5432',
  dbSnapshot: 'devops-global-db-prod-20220511',
  dbUsername: 'root',
  dnsRecords,
  domainNameCerts,
  environment: 'development',
  flowLogsEnabled: false,
  flowLogFormat:
    '${version} ${account-id} ${interface-id} ${srcaddr} ${dstaddr} ${srcport} ${dstport} ${protocol} ${packets} ' +
    '${bytes} ${start} ${end} ${action} ${log-status} ${vpc-id} ${subnet-id} ${instance-id} ${tcp-flags} ${type} ' +
    '${pkt-srcaddr} ${pkt-dstaddr} ${region} ${az-id} ${sublocation-type} ${sublocation-id} ${pkt-src-aws-service} ' +
    '${pkt-dst-aws-service} ${flow-direction} ${traffic-path}',
  flowLogVpcs: [
    'o11n-eks-brdcst-dev-VPC',
    'o11n-eks-brdcst-studio-dev-us-e1-VPC',
  ],
  hostedZoneApex: 'stream-dev.jw.org',
  hostedZonesToCreate: [
    'encoder.stream-dev.jw.org',
    'iptv.stream-dev.jw.org',
  ],
  gracenoteSecretArn:
    'arn:aws:secretsmanager:us-east-1:378004910391:secret:iptv/gracenote/ftp-gwNqxr',
  lambdaRuntime: Runtime.GO_1_X,
  nodeIamRole: 'o11n-eks-brdcst-dev-NodeIamRole-XYUDPK9IYXZN',
  openIDProviderArn: [
    // Application cluster
    'arn:aws:iam::378004910391:oidc-provider/oidc.eks.us-east-1.amazonaws.com/id/13EBA373560E87E4201C021A172C1B3A',
    // Studio Cluster
    'arn:aws:iam::378004910391:oidc-provider/oidc.eks.us-east-1.amazonaws.com/id/1DDA1A5A66FE8F0EA72B587BEB0262EF',
  ],
  stackCISControlName: 'DEVOPS-GLOBAL-CONTROLS-DEV',
  stackDatabaseName: 'DEVOPS-GLOBAL-DB-DEV',
  stackDnsHostedZonesName: 'DEVOPS-GLOBAL-DNS-HOSTEDZONES-DEV',
  stackDnsRecordsName: 'DEVOPS-GLOBAL-DNS-RECORDS-DEV',
  stackMainName: 'DEVOPS-GLOBAL-DEV',
  stackRegionalLogName: 'DEVOPS-GLOBAL-LOG-DEV',
  vpcCidr: '10.5.0.0/16',
  wazuhBuckets: ['arn:aws:s3:::devsecops-waflog-v2'],
  wazuhBucketKmsKey: 'arn:aws:kms:us-east-1:416004717031:key/82514b71-e0aa-418f-8fec-6675c338689c',
};
