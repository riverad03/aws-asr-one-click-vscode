import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Config } from '.';
import { allowIpCidrs } from './allowIps';
import { dnsRecords } from './productionDns';

const dbIngressCidrs: { [key: string]: string } = {
  'Allow from Gitlab (docker-k8s) nat-gw.appsgit-runners.jw-cd-orchestration-prd.10aws.org to RDS': '3.223.148.148/32',
  'Allow from Gitlab (docker-linux) to RDS': '35.168.78.108/32',
  'Allow from the k8s cluster to RDS': '54.144.154.68/32',
  'Allow from the US branch to RDS': '208.74.140.0/22',
  'Allow from the Brazil branch to RDS': '138.59.56.0/22',
  'Allow from the South Africa branch to RDS': '169.239.28.0/22',
};

const domainNameCerts: { [key: string]: string } = {
  CertificateDefectArn: 'defectdojo.stream.jw.org',
  CertificatePactArn: 'pact.stream.jw.org',
  CertificateTechdocsArn: 'techdocs.stream.jw.org',
  CertificateWazuhArn: 'wazuh.stream.jw.org',
  CertificateMispArn: 'misp.stream.jw.org',
};

export const production: Config = {
  alertEmail: '9b713584.jwsite.onmicrosoft.com@amer.teams.ms',
  awsAccount: '553571552722',
  awsRegion: process.env.AWS_REGION || 'us-east-1',
  allowIps: allowIpCidrs,
  dbIngressCidrs,
  dbPort: '5432',
  dbSnapshot: 'devops-global-db-prod-20220511',
  dbUsername: 'root',
  dnsRecords,
  domainNameCerts,
  environment: 'production',
  flowLogsEnabled: false,
  flowLogFormat:
    '${version} ${account-id} ${interface-id} ${srcaddr} ${dstaddr} ${srcport} ${dstport} ${protocol} ${packets} ' +
    '${bytes} ${start} ${end} ${action} ${log-status} ${vpc-id} ${subnet-id} ${instance-id} ${tcp-flags} ${type} ' +
    '${pkt-srcaddr} ${pkt-dstaddr} ${region} ${az-id} ${sublocation-type} ${sublocation-id} ${pkt-src-aws-service} ' +
    '${pkt-dst-aws-service} ${flow-direction} ${traffic-path}',
  flowLogVpcs: [
    'o11n-eks-brdcst-studio-union-us-e1-VPC',
    'o11n-eks-brdcst-union-VPC',
    'o11n-eks-brdcst-VPC',
    'o11n-eks-brdcst-studio-us-e1-VPC',
  ],
  hostedZoneApex: 'stream.jw.org',
  hostedZonesToCreate: [
    'encoder.stream.jw.org',
    'iptv.stream.jw.org',
  ],
  gracenoteSecretArn:
    'arn:aws:secretsmanager:us-east-1:553571552722:secret:iptv/gracenote/ftp-q1b55Z',
  lambdaRuntime: Runtime.GO_1_X,
  nodeIamRole: 'o11n-eks-brdcst-NodeIamRole-JI30BFKQXA55',
  openIDProviderArn: [
    // Application Cluster
    'arn:aws:iam::553571552722:oidc-provider/oidc.eks.us-east-1.amazonaws.com/id/2DF8E4FAE31558A6366072B955DECC79',
    // Studio Cluster - US E1
    'arn:aws:iam::553571552722:oidc-provider/oidc.eks.us-east-1.amazonaws.com/id/07B5B01560FCE3B6D1DD5675ACF76853',
  ],
  stackCISControlName: 'DEVOPS-GLOBAL-CONTROLS-PROD',
  stackDatabaseName: 'DEVOPS-GLOBAL-DB-PROD',
  stackDnsHostedZonesName: 'DEVOPS-GLOBAL-DNS-HOSTEDZONES-PROD',
  stackDnsRecordsName: 'DEVOPS-GLOBAL-DNS-RECORDS-PROD',
  stackMainName: 'DEVOPS-GLOBAL-PROD',
  stackRegionalLogName: 'DEVOPS-GLOBAL-LOG-PROD',
  vpcCidr: '10.5.0.0/16',
  wazuhBuckets: ['arn:aws:s3:::devsecops-waflog-v2'],
  wazuhBucketKmsKey: 'arn:aws:kms:us-east-1:416004717031:key/82514b71-e0aa-418f-8fec-6675c338689c',
};
