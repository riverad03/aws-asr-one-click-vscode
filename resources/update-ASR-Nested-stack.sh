#!/bin/bash

STACK_NAME="DEVOPS-GLOBAL-ASR-DEV-awsSharrAdminStackNestedStackawsSharrAdm-PlaybookAdminStackAFSBP"
AFSBPAutoScaling1AutoTrigger_NAME="AFSBPAutoScaling1AutoTrigger"
AFSBPAutoScaling1AutoTrigger_VALUE="DISABLED"
AFSBPCloudTrail1AutoTrigger_NAME="AFSBPCloudTrail1AutoTrigger"
AFSBPCloudTrail1AutoTrigger_VALUE="DISABLED"
AFSBPCloudTrail2AutoTrigger_NAME="AFSBPCloudTrail2AutoTrigger"
AFSBPCloudTrail2AutoTrigger_VALUE="DISABLED"
AFSBPCloudTrail4AutoTrigger_NAME="AFSBPCloudTrail4AutoTrigger"
AFSBPCloudTrail4AutoTrigger_VALUE="DISABLED"
AFSBPCloudTrail5AutoTrigger_NAME="AFSBPCloudTrail5AutoTrigger"
AFSBPCloudTrail5AutoTrigger_VALUE="DISABLED"
AFSBPCodeBuild2AutoTrigger_NAME="AFSBPCodeBuild2AutoTrigger"
AFSBPCodeBuild2AutoTrigger_VALUE="DISABLED"
AFSBPConfig1AutoTrigger_NAME="AFSBPConfig1AutoTrigger"
AFSBPConfig1AutoTrigger_VALUE="DISABLED"
AFSBPEC21AutoTrigger_NAME="AFSBPEC21AutoTrigger"
AFSBPEC21AutoTrigger_VALUE="DISABLED"
AFSBPEC22AutoTrigger_NAME="AFSBPEC22AutoTrigger"
AFSBPEC22AutoTrigger_VALUE="DISABLED"
AFSBPEC26AutoTrigger_NAME="AFSBPEC26AutoTrigger"
AFSBPEC26AutoTrigger_VALUE="DISABLED"
AFSBPEC27AutoTrigger_NAME="AFSBPEC27AutoTrigger"
AFSBPEC27AutoTrigger_VALUE="DISABLED"
AFSBPIAM3AutoTrigger_NAME="AFSBPIAM3AutoTrigger"
AFSBPIAM3AutoTrigger_VALUE="DISABLED"
AFSBPIAM7AutoTrigger_NAME="AFSBPIAM7AutoTrigger"
AFSBPIAM7AutoTrigger_VALUE="DISABLED"
AFSBPIAM8AutoTrigger_NAME="AFSBPIAM8AutoTrigger"
AFSBPIAM8AutoTrigger_VALUE="DISABLED"
AFSBPLambda1AutoTrigger_NAME="AFSBPLambda1AutoTrigger"
AFSBPLambda1AutoTrigger_VALUE="DISABLED"
AFSBPRDS13AutoTrigger_NAME="AFSBPRDS13AutoTrigger"
AFSBPRDS13AutoTrigger_VALUE="DISABLED"
AFSBPRDS16AutoTrigger_NAME="AFSBPRDS16AutoTrigger"
AFSBPRDS16AutoTrigger_VALUE="DISABLED"
AFSBPRDS1AutoTrigger_NAME="AFSBPRDS1AutoTrigger"
AFSBPRDS1AutoTrigger_VALUE="DISABLED"
AFSBPRDS2AutoTrigger_NAME="AFSBPRDS2AutoTrigger"
AFSBPRDS2AutoTrigger_VALUE="DISABLED"
AFSBPRDS4AutoTrigger_NAME="AFSBPRDS4AutoTrigger"
AFSBPRDS4AutoTrigger_VALUE="DISABLED"
AFSBPRDS5AutoTrigger_NAME="AFSBPRDS5AutoTrigger"
AFSBPRDS5AutoTrigger_VALUE="DISABLED"
AFSBPRDS6AutoTrigger_NAME="AFSBPRDS6AutoTrigger"
AFSBPRDS6AutoTrigger_VALUE="DISABLED"
AFSBPRDS7AutoTrigger_NAME="AFSBPRDS7AutoTrigger"
AFSBPRDS7AutoTrigger_VALUE="DISABLED"
AFSBPRDS8AutoTrigger_NAME="AFSBPRDS8AutoTrigger"
AFSBPRDS8AutoTrigger_VALUE="DISABLED"
AFSBPRedshift1AutoTrigger_NAME="AFSBPRedshift1AutoTrigger"
AFSBPRedshift1AutoTrigger_VALUE="DISABLED"
AFSBPRedshift3AutoTrigger_NAME="AFSBPRedshift3AutoTrigger"
AFSBPRedshift3AutoTrigger_VALUE="DISABLED"
AFSBPRedshift4AutoTrigger_NAME="AFSBPRedshift4AutoTrigger"
AFSBPRedshift4AutoTrigger_VALUE="DISABLED"
AFSBPRedshift6AutoTrigger_NAME="AFSBPRedshift6AutoTrigger"
AFSBPRedshift6AutoTrigger_VALUE="DISABLED"
AFSBPS31AutoTrigger_NAME="AFSBPS31AutoTrigger"
AFSBPS31AutoTrigger_VALUE="DISABLED"
AFSBPS32AutoTrigger_NAME="AFSBPS32AutoTrigger"
AFSBPS32AutoTrigger_VALUE="DISABLED"
AFSBPS33AutoTrigger_NAME="AFSBPS33AutoTrigger"
AFSBPS33AutoTrigger_VALUE="DISABLED"
AFSBPS34AutoTrigger_NAME="AFSBPS34AutoTrigger"
AFSBPS34AutoTrigger_VALUE="DISABLED"
AFSBPS35AutoTrigger_NAME="AFSBPS35AutoTrigger"
AFSBPS35AutoTrigger_VALUE="DISABLED"
AFSBPS36AutoTrigger_NAME="AFSBPS36AutoTrigger"
AFSBPS36AutoTrigger_VALUE="DISABLED"
AFSBPS38AutoTrigger_NAME="AFSBPS38AutoTrigger"
AFSBPS38AutoTrigger_VALUE="DISABLED"



aws cloudformation update-stack \
  --stack-name "$STACK_NAME" \
  --parameters \
    ParameterKey="$AFSBPAutoScaling1AutoTrigger_NAME",ParameterValue="$AFSBPAutoScaling1AutoTrigger_VALUE" \
    ParameterKey="$AFSBPCloudTrail1AutoTrigger_NAME",ParameterValue="$AFSBPCloudTrail1AutoTrigger_VALUE" \
    ParameterKey="$AFSBPCloudTrail2AutoTrigger_NAME",ParameterValue="$AFSBPCloudTrail2AutoTrigger_VALUE" \
    ParameterKey="$AFSBPCloudTrail4AutoTrigger_NAME",ParameterValue="$AFSBPCloudTrail4AutoTrigger_VALUE" \
    ParameterKey="$AFSBPCloudTrail5AutoTrigger_NAME",ParameterValue="$AFSBPCloudTrail5AutoTrigger_VALUE" \
    ParameterKey="$AFSBPCodeBuild2AutoTrigger_NAME",ParameterValue="$AFSBPCodeBuild2AutoTrigger_VALUE" \
    ParameterKey="$AFSBPConfig1AutoTrigger_NAME",ParameterValue="$AFSBPConfig1AutoTrigger_VALUE" \
    ParameterKey="$AFSBPEC21AutoTrigger_NAME",ParameterValue="$AFSBPEC21AutoTrigger_VALUE" \
    ParameterKey="$AFSBPEC22AutoTrigger_NAME",ParameterValue="$AFSBPEC22AutoTrigger_VALUE" \
    ParameterKey="$AFSBPEC26AutoTrigger_NAME",ParameterValue="$AFSBPEC26AutoTrigger_VALUE" \
    ParameterKey="$AFSBPEC27AutoTrigger_NAME",ParameterValue="$AFSBPEC27AutoTrigger_VALUE" \
    ParameterKey="$AFSBPIAM3AutoTrigger_NAME",ParameterValue="$AFSBPIAM3AutoTrigger_VALUE" \
    ParameterKey="$AFSBPIAM7AutoTrigger_NAME",ParameterValue="$AFSBPIAM7AutoTrigger_VALUE" \
    ParameterKey="$AFSBPIAM8AutoTrigger_NAME",ParameterValue="$AFSBPIAM8AutoTrigger_VALUE" \
    ParameterKey="$AFSBPLambda1AutoTrigger_NAME",ParameterValue="$AFSBPLambda1AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRDS13AutoTrigger_NAME",ParameterValue="$AFSBPRDS13AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRDS16AutoTrigger_NAME",ParameterValue="$AFSBPRDS16AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRDS1AutoTrigger_NAME",ParameterValue="$AFSBPRDS1AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRDS2AutoTrigger_NAME",ParameterValue="$AFSBPRDS2AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRDS4AutoTrigger_NAME",ParameterValue="$AFSBPRDS4AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRDS5AutoTrigger_NAME",ParameterValue="$AFSBPRDS5AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRDS6AutoTrigger_NAME",ParameterValue="$AFSBPRDS6AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRDS7AutoTrigger_NAME",ParameterValue="$AFSBPRDS7AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRDS8AutoTrigger_NAME",ParameterValue="$AFSBPRDS8AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRedshift1AutoTrigger_NAME",ParameterValue="$AFSBPRedshift1AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRedshift3AutoTrigger_NAME",ParameterValue="$AFSBPRedshift3AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRedshift4AutoTrigger_NAME",ParameterValue="$AFSBPRedshift4AutoTrigger_VALUE" \
    ParameterKey="$AFSBPRedshift6AutoTrigger_NAME",ParameterValue="$AFSBPRedshift6AutoTrigger_VALUE" \
    ParameterKey="$AFSBPS31AutoTrigger_NAME",ParameterValue="$AFSBPS31AutoTrigger_VALUE" \
    ParameterKey="$AFSBPS32AutoTrigger_NAME",ParameterValue="$AFSBPS32AutoTrigger_VALUE" \
    ParameterKey="$AFSBPS33AutoTrigger_NAME",ParameterValue="$AFSBPS33AutoTrigger_VALUE" \
    ParameterKey="$AFSBPS34AutoTrigger_NAME",ParameterValue="$AFSBPS34AutoTrigger_VALUE" \
    ParameterKey="$AFSBPS35AutoTrigger_NAME",ParameterValue="$AFSBPS35AutoTrigger_VALUE" \
    ParameterKey="$AFSBPS36AutoTrigger_NAME",ParameterValue="$AFSBPS36AutoTrigger_VALUE" \
    ParameterKey="$AFSBPS38AutoTrigger_NAME",ParameterValue="$AFSBPS38AutoTrigger_VALUE"
