export interface Release {
  id: number;
  name: string;
  status: string;
  createdOn: string;
  modifiedOn: string;
  modifiedBy: CreatedBy;
  createdBy: CreatedBy;
  environments: Environment[];
  variables: Properties;
  variableGroups: any[];
  artifacts: Artifact[];
  releaseDefinition: ReleaseDefinitionClass;
  description: string;
  reason: string;
  releaseNameFormat: string;
  keepForever: boolean;
  definitionSnapshotRevision: number;
  logsContainerUrl: string;
  url: string;
  _links: Links;
  tags: any[];
  projectReference: ProjectReference;
  properties: Properties;
}

export interface Links {
  web: Self;
  self: Self;
}

export interface Self {
  href: string;
}

export interface Artifact {
  sourceId: string;
  type: string;
  alias: string;
  definitionReference: DefinitionReference;
  isPrimary: boolean;
}

export interface DefinitionReference {
  artifactSourceDefinitionUrl: ProjectReference;
  defaultVersionBranch: ProjectReference;
  defaultVersionSpecific: ProjectReference;
  defaultVersionTags: ProjectReference;
  defaultVersionType: ProjectReference;
  definition: ProjectReference;
  project: ProjectReference;
  version: ProjectReference;
  artifactSourceVersionUrl: ProjectReference;
  branch: ProjectReference;
}

export interface ProjectReference {
  id: string;
  name: null | string;
}

export interface CreatedBy {
  id: string;
  displayName: string;
  uniqueName: string;
  url: string;
  imageUrl: string;
}

export interface Environment {
  id: number;
  releaseId: number;
  name: string;
  status: string;
  variables: Properties;
  preDeployApprovals: any[];
  postDeployApprovals: any[];
  preApprovalsSnapshot: PreApprovalsSnapshot;
  postApprovalsSnapshot: PostApprovalsSnapshot;
  deploySteps: any[];
  rank: number;
  definitionEnvironmentId: number;
  environmentOptions: EnvironmentOptions;
  demands: any[];
  conditions: Condition[];
  workflowTasks: any[];
  deployPhasesSnapshot: DeployPhasesSnapshot[];
  owner: CreatedBy;
  schedules: any[];
  release: ReleaseDefinitionClass;
  releaseDefinition: ReleaseDefinitionClass;
  releaseCreatedBy: ReleaseCreatedBy;
  triggerReason: string;
}

export interface Condition {
  result: boolean;
  name: string;
  conditionType: string;
  value: string;
}

export interface DeployPhasesSnapshot {
  deploymentInput: DeploymentInput;
  rank: number;
  phaseType: string;
  name: string;
  workflowTasks: WorkflowTask[];
}

export interface DeploymentInput {
  parallelExecution: ParallelExecution;
  skipArtifactsDownload: boolean;
  timeoutInMinutes: number;
  queueId: number;
  demands: any[];
  enableAccessToken: boolean;
}

export interface ParallelExecution {
  parallelExecutionType: string;
}

export interface WorkflowTask {
  taskId: string;
  version: string;
  name: string;
  enabled: boolean;
  alwaysRun: boolean;
  continueOnError: boolean;
  timeoutInMinutes: number;
  definitionType: string;
  inputs: Inputs;
}

export interface Inputs {
  scriptType: string;
  scriptName: string;
  arguments: string;
  inlineScript: string;
  workingFolder: string;
  failOnStandardError: string;
}

export interface EnvironmentOptions {
  emailNotificationType: string;
  emailRecipients: string;
  skipArtifactsDownload: boolean;
  timeoutInMinutes: number;
  enableAccessToken: boolean;
  publishDeploymentStatus: boolean;
}

export interface PostApprovalsSnapshot {
  approvals: Approval[];
}

export interface Approval {
  rank: number;
  isAutomated: boolean;
  isNotificationOn: boolean;
  id: number;
  approver?: CreatedBy;
}

export interface PreApprovalsSnapshot {
  approvals: Approval[];
  approvalOptions?: ApprovalOptions;
}

export interface ApprovalOptions {
  requiredApproverCount: number;
  releaseCreatorCanBeApprover: boolean;
  autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped: boolean;
  enforceIdentityRevalidation: boolean;
  timeoutInMintues: number;
}

export interface ReleaseDefinitionClass {
  id: number;
  name: string;
  url: string;
  _links: Links;
}

export interface ReleaseCreatedBy {
  id: string;
  displayName: string;
}

export interface Properties {}
