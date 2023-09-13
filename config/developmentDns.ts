import { Dns } from '.';

// Hosted zones and records.
// NOTE: 450 max per block, each block will be it's own stack with the block name appended.
// NOTE: ARecords are a list of strings
//       AaaaRecords are a list of strings
//       CnameRecords are a string
export const dnsRecords: { [key: string]: Dns[] } = {
  'iptv-1': [
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'tux-simp', targets: ['172.31.79.145'], ttl: 60, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'tux-lab', targets: ['172.31.79.155'], ttl: 60, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'tux-lab-01', targets: ['172.31.79.158'], ttl: 60, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'tux-lab-02', targets: ['172.31.79.159'], ttl: 60, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'tux', targets: ['172.31.79.35'], ttl: 60, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'tux-01', targets: ['172.31.79.36'], ttl: 60, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'tux-02', targets: ['172.31.79.37'], ttl: 60, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'col-lab', targets: ['172.17.69.13'], ttl: 300, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'col-lab-01', targets: ['172.17.69.11'], ttl: 300, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'col-lab-02', targets: ['172.17.69.12'], ttl: 300, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'adeak-lab', targets: ['172.17.90.40'], ttl: 300, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'adeak-lab01', targets: ['172.17.90.41'], ttl: 300, type: 'A' },
    { hostedZone: 'iptv.stream-dev.jw.org', name: 'adeak-lab02', targets: ['172.17.90.42'], ttl: 300, type: 'A' },
  ],
  'encoder-1': [
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'tux-001', targets: ['172.31.79.101'], ttl: 60, type: 'A' },
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'tux-002', targets: ['172.31.79.102'], ttl: 60, type: 'A' },
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'tux-003', targets: ['172.31.79.103'], ttl: 60, type: 'A' },
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'tux-004', targets: ['172.31.79.104'], ttl: 60, type: 'A' },
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'tux-005', targets: ['172.31.79.105'], ttl: 60, type: 'A' },
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'tux-006', targets: ['172.31.79.157'], ttl: 60, type: 'A' },
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'test-001', targets: ['172.31.79.50'], ttl: 60, type: 'A' },
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'test-002', targets: ['172.31.79.50'], ttl: 60, type: 'A' },
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'deu-lab01', targets: ['172.17.90.41'], ttl: 300, type: 'A' },
    { hostedZone: 'encoder.stream-dev.jw.org', name: 'deu-lab02', targets: ['172.17.90.42'], ttl: 300, type: 'A' },
  ]
};
