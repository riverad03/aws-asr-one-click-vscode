import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { development } from './development';
import { production } from './production';
import { staging } from './staging';

export interface Dns {
  hostedZone: string;
  name: string;
  targets: string[] | string;
  ttl: number;
  type: string;
}

export interface Config {
  alertEmail: string;
  awsAccount: string;
  awsRegion: string;
  allowIps: string[];
  dbSnapshot: string;
  dbIngressCidrs: { [key: string]: string };
  dbPort: string;
  dbUsername: string;
  dnsRecords: { [key: string]: Dns[] };
  domainNameCerts: { [key: string]: string };
  environment: string;
  flowLogsEnabled: boolean;
  flowLogFormat: string;
  flowLogVpcs: string[];
  gracenoteSecretArn: string;
  hostedZoneApex: string;
  hostedZonesToCreate: string[];
  lambdaRuntime: Runtime;
  nodeIamRole: string;
  openIDProviderArn: string[];
  stackCISControlName: string;
  stackDatabaseName: string;
  stackDnsHostedZonesName: string;
  stackDnsRecordsName: string;
  stackMainName: string;
  stackRegionalLogName: string;
  vpcCidr: string;
  wazuhBuckets: string[];
  wazuhBucketKmsKey: string;
}

export function getConfig(): Config {
  let config: Config;
  switch (process.env.ENVIRONMENT) {
    case 'staging':
      config = staging;
      break;
    case 'production':
      config = production;
      break;
    case 'development':
    default:
      config = development;
  }

  return { ...config };
}
