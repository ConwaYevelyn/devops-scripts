// types.ts
import * as path from 'path';

export interface IPipeline {
  name: string;
  workspace: string;
  parameters: { [key: string]: string };
}

export interface IEnvironment {
  name: string;
  variables: { [key: string]: string };
}

export interface ICodeRepository {
  name: string;
  type: 'git' | 'svn';
  url: string;
  branch: string;
  credentials: { [key: string]: string };
}

export interface IEnvironmentVariable {
  name: string;
  value: string;
}

export interface IPipelineEnvironment {
  environment: IEnvironment;
  variables: IEnvironmentVariable[];
}

export interface IPipelineStep {
  name: string;
  type: 'task' | 'script' | 'deployment' | 'release';
  environment: IPipelineEnvironment;
  credentials: { [key: string]: string };
  parameters?: { [key: string]: string };
  outputs?: { [key: string]: string };
}

export interface IPipelineArtifact {
  name: string;
  type: 'file' | 'folder';
  path: string;
  credentials: { [key: string]: string };
}

export interface IPipelineOutput {
  name: string;
  artifact: IPipelineArtifact;
  parameters?: { [key: string]: string };
}

export interface IEnvironmentProvider {
  name: string;
  type: 'powershell' | 'bash' | 'cmd';
  variables: IEnvironmentVariable[];
}

export interface IPipelineTrigger {
  name: string;
  type: 'timer' | 'api' | 'custom';
  parameters?: { [key: string]: string };
  environment?: IEnvironment;
}

export interface IPipeline {
  name: string;
  workspace: string;
  parameters: { [key: string]: string };
  triggers: IPipelineTrigger[];
  steps: IPipelineStep[];
  outputs: IPipelineOutput[];
}

export interface IScript {
  name: string;
  path: string;
  parameters?: { [key: string]: string };
}

export interface IDeployment {
  name: string;
  type: 'arm' | 'bicep';
  path: string;
  parameters?: { [key: string]: string };
  credentials: { [key: string]: string };
}

export interface IRelease {
  name: string;
  type: 'azure-pipelines';
  pipeline: IPipeline;
  environment: IEnvironment;
}

export interface IDeploymentArtifact {
  name: string;
  type: 'file' | 'folder';
  path: string;
  credentials: { [key: string]: string };
}

export interface IDeploymentOutput {
  name: string;
  artifact: IDeploymentArtifact;
  parameters?: { [key: string]: string };
}

export interface IEnvironmentProvider {
  name: string;
  type: 'powershell' | 'bash' | 'cmd';
  variables: IEnvironmentVariable[];
}

export interface IDeploymentTrigger {
  name: string;
  type: 'timer' | 'api' | 'custom';
  parameters?: { [key: string]: string };
  environment?: IEnvironment;
}

export interface IRelease {
  name: string;
  type: 'azure-pipelines';
  pipeline: IPipeline;
  environment: IEnvironment;
  deployment: IDeployment;
}

export interface ISubscription {
  name: string;
  id: string;
  credentials: { [key: string]: string };
}

export interface IAzureResource {
  name: string;
  type: 'resource-group' | 'storage-account' | 'virtual-network';
  subscription: ISubscription;
  credentials: { [key: string]: string };
}