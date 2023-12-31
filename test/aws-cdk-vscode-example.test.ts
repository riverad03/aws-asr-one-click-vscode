import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import { App } from 'aws-cdk-lib';
import AwsCdkVscodeExample = require('../lib/automated-security-response-admin');

test('Empty Stack', () => {
    const app = new App();
    // WHEN
    const stack = new AwsCdkVscodeExample.awsSharrAdminStack(app);
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
