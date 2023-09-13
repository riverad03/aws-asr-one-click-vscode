import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Config } from '.';
import { allowIpCidrs } from './allowIps';

const dbIngressCidrs: { [key: string]: string } = {
  'Allow from Gitlab (docker-k8s) nat-gw.appsgit-runners.jw-cd-orchestration-prd.10aws.org to RDS': '3.223.148.148/32',
  'Allow from Gitlab (docker-linux) to RDS': '35.168.78.108/32',
  'Allow from the k8s cluster to RDS': '3.224.82.184/32',
  'Allow from the US branch to RDS': '208.74.140.0/22',
  'Allow from the Brazil branch to RDS': '138.59.56.0/22',
  'Allow from the South Africa branch to RDS': '169.239.28.0/22',
};

const domainNameCerts: { [key: string]: string } = {
  CertificateWazuhArn: 'staging-wazuh.stream.jw.org',
};

export const staging: Config = {
  alertEmail: '9b713584.jwsite.onmicrosoft.com@amer.teams.ms',
  awsAccount: '553571552722',
  awsRegion: process.env.AWS_REGION || 'us-east-1',
  allowIps: allowIpCidrs,
  dbIngressCidrs: dbIngressCidrs,
  dbPort: '5432',
  dbSnapshot: 'devops-global-db-prod-20220511',
  dbUsername: 'root',
  dnsRecords: {},
  domainNameCerts,
  environment: 'staging',
  flowLogsEnabled: false,
  flowLogFormat:
    '${version} ${account-id} ${interface-id} ${srcaddr} ${dstaddr} ${srcport} ${dstport} ${protocol} ${packets} ' +
    '${bytes} ${start} ${end} ${action} ${log-status} ${vpc-id} ${subnet-id} ${instance-id} ${tcp-flags} ${type} ' +
    '${pkt-srcaddr} ${pkt-dstaddr} ${region} ${az-id} ${sublocation-type} ${sublocation-id} ${pkt-src-aws-service} ' +
    '${pkt-dst-aws-service} ${flow-direction} ${traffic-path}',
  flowLogVpcs: [],
  gracenoteSecretArn:
    'arn:aws:secretsmanager:us-east-1:553571552722:secret:iptv/gracenote/ftp-q1b55Z',
  lambdaRuntime: Runtime.GO_1_X,
  hostedZoneApex: 'stream.jw.org',
  hostedZonesToCreate: [],
  nodeIamRole: 'o11n-eks-brdcst-union-NodeIamRole-19YZSKRZV59GV',
  openIDProviderArn: [
    // Aplication cluster
    'arn:aws:iam::553571552722:oidc-provider/oidc.eks.us-east-1.amazonaws.com/id/9BDB74DA115F2020206B774DC7A0C2DE',
    // Studio Cluster - EU C1
    'arn:aws:iam::553571552722:oidc-provider/oidc.eks.eu-central-1.amazonaws.com/id/A636F49E0CF5B00EDA57BFEB9659DC3E',
    // Studio Cluster - US E1
    'arn:aws:iam::553571552722:oidc-provider/oidc.eks.us-east-1.amazonaws.com/id/AC92EB2AFBFE062D9BC7067BE0ADAC15',
  ],
  stackCISControlName: 'DEVOPS-GLOBAL-CONTROLS-STAGING',
  stackDatabaseName: 'DEVOPS-GLOBAL-DB-STAGING',
  stackDnsHostedZonesName: 'DEVOPS-GLOBAL-DNS-HOSTEDZONES-STAGING',
  stackDnsRecordsName: 'DEVOPS-GLOBAL-DNS-RECORDS-STAGING',
  stackMainName: 'DEVOPS-GLOBAL-STAGING',
  stackRegionalLogName: 'DEVOPS-GLOBAL-LOG-STAGING',
  vpcCidr: '10.5.0.0/16',
  wazuhBuckets: ['arn:aws:s3:::devsecops-waflog-v2'],
  wazuhBucketKmsKey: 'arn:aws:kms:us-east-1:416004717031:key/82514b71-e0aa-418f-8fec-6675c338689c',
};
