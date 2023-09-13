# Automated Security Response One-Click Deployment

This repository contains CloudFormation templates and TypeScript code to deploy the [Automated Security Response](https://aws.amazon.com/solutions/implementations/automated-security-response-on-aws/) solution from the AWS Solutions Library with one click.

## Contents

The repository contains the following:

- `resources/aws-sharr-deploy.yml`: The CloudFormation template for deploying the Automated Security Response infrastructure.

- `resources/aws-sharr-member-roles.yml`: The CloudFormation template for deploying the member roles of the Automated Security Response infrastructure.

- `resources/aws-sharr-member.yml`: The CloudFormation template for deploying the members of the Automated Security Response infrastructure.

- `resources/update-ASR-Nested-stack.sh`: This is a shell script you can use to ENABLE/DISABLE the triggers of the ASR once deployed.

- `lib/automated-security-response-admin.ts`: The TypeScript code as part of the ASR.  THis is a direct copy from the ASR WebSite. 

- `lib/automated-security-response-deploy.ts`: The TypeScript code as part of the ASR.  THis is a direct copy from the ASR WebSite.

- `lib/automated-security-response-member-roles.ts`: The TypeScript code as part of the ASR.  THis is a direct copy from the ASR WebSite.

- `lib/automated-security-response-member-roles.ts`: The TypeScript code as part of the ASR.  THis is a direct copy from the ASR WebSite.

## Usage

To deploy the Automated Security Response solution:

1. Clone this repository

2. Run `npm install` to install the dependencies

3. Update any parameters in `constants.ts` if needed

4. Run `npm run deploy` to deploy the CloudFormation stack

The `deploy` script will use the credentials in your AWS CLI configuration to deploy the stack.

After deployment, you can login to the AWS Console to view and manage the created resources.

## Clean Up

To delete the created resources, simply delete the CloudFormation stack either via AWS Console or AWS CLI.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.