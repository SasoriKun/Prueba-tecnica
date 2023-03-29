export default [
  {
    id: 18,
    name: "Release-18",
    status: "abandoned",
    createdOn: "2017-06-16T01:36:20.397Z",
    modifiedOn: "2017-06-16T01:36:21.07Z",
    modifiedBy: {
      id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
      displayName: "Chuck Reinhart",
      uniqueName: "fabfiber@outlook.com",
      url: "https://vssps.dev.azure.com/fabrikam/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
      imageUrl:
        "https://dev.azure.com/fabrikam/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
    },
    createdBy: {
      id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
      displayName: "Chuck Reinhart",
      uniqueName: "fabfiber@outlook.com",
      url: "https://vssps.dev.azure.com/fabrikam/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
      imageUrl:
        "https://dev.azure.com/fabrikam/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
    },
    environments: [
      {
        id: 69,
        releaseId: 18,
        name: "Dev",
        status: "notStarted",
        variables: {},
        preDeployApprovals: [],
        postDeployApprovals: [],
        preApprovalsSnapshot: {
          approvals: [
            {
              rank: 1,
              isAutomated: false,
              isNotificationOn: false,
              approver: {
                id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
                displayName: "Chuck Reinhart",
                uniqueName: "fabfiber@outlook.com",
                url: "https://vssps.dev.azure.com/fabrikam/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
                imageUrl:
                  "https://dev.azure.com/fabrikam/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
              },
              id: 0,
            },
          ],
          approvalOptions: {
            requiredApproverCount: 0,
            releaseCreatorCanBeApprover: true,
            autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped: false,
            enforceIdentityRevalidation: false,
            timeoutInMintues: 43200,
          },
        },
        postApprovalsSnapshot: {
          approvals: [
            {
              rank: 1,
              isAutomated: true,
              isNotificationOn: false,
              id: 0,
            },
          ],
        },
        deploySteps: [],
        rank: 1,
        definitionEnvironmentId: 1,
        environmentOptions: {
          emailNotificationType: "OnlyOnFailure",
          emailRecipients: "release.environment.owner;release.creator",
          skipArtifactsDownload: false,
          timeoutInMinutes: 0,
          enableAccessToken: false,
          publishDeploymentStatus: false,
        },
        demands: [],
        conditions: [],
        workflowTasks: [],
        deployPhasesSnapshot: [
          {
            deploymentInput: {
              parallelExecution: {
                parallelExecutionType: "none",
              },
              skipArtifactsDownload: false,
              timeoutInMinutes: 0,
              queueId: 2,
              demands: [],
              enableAccessToken: false,
            },
            rank: 1,
            phaseType: "agentBasedDeployment",
            name: "Run on agent",
            workflowTasks: [
              {
                taskId: "e213ff0f-5d5c-4791-802d-52ea3e7be1f1",
                version: "1.*",
                name: "PowerShell Script",
                enabled: true,
                alwaysRun: false,
                continueOnError: false,
                timeoutInMinutes: 0,
                definitionType: "task",
                inputs: {
                  scriptType: "inlineScript",
                  scriptName: "",
                  arguments: "",
                  inlineScript:
                    '# You can write your powershell scripts inline here. \n# You can also pass predefined and custom variables to this scripts using arguments\n\n Write-Host "Hello World"',
                  workingFolder: "",
                  failOnStandardError: "true",
                },
              },
            ],
          },
        ],
        owner: {
          id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          displayName: "Chuck Reinhart",
          uniqueName: "fabfiber@outlook.com",
          url: "https://vssps.dev.azure.com/fabrikam/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          imageUrl:
            "https://dev.azure.com/fabrikam/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        },
        schedules: [],
        release: {
          id: 18,
          name: "Release-18",
          url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
          _links: {
            web: {
              href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?releaseId=18&_a=release-summary",
            },
            self: {
              href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
            },
          },
        },
        releaseDefinition: {
          id: 1,
          name: "MyShuttle.CD",
          url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
          _links: {
            web: {
              href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?definitionId=1",
            },
            self: {
              href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
            },
          },
        },
        releaseCreatedBy: {
          id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          displayName: "Chuck Reinhart",
        },
        triggerReason: "Manual",
      },
      {
        id: 70,
        releaseId: 18,
        name: "QA",
        status: "notStarted",
        variables: {},
        preDeployApprovals: [],
        postDeployApprovals: [],
        preApprovalsSnapshot: {
          approvals: [
            {
              rank: 1,
              isAutomated: true,
              isNotificationOn: false,
              id: 0,
            },
          ],
        },
        postApprovalsSnapshot: {
          approvals: [
            {
              rank: 1,
              isAutomated: true,
              isNotificationOn: false,
              id: 0,
            },
          ],
        },
        deploySteps: [],
        rank: 2,
        definitionEnvironmentId: 2,
        environmentOptions: {
          emailNotificationType: "OnlyOnFailure",
          emailRecipients: "release.environment.owner;release.creator",
          skipArtifactsDownload: false,
          timeoutInMinutes: 0,
          enableAccessToken: false,
          publishDeploymentStatus: false,
        },
        demands: [],
        conditions: [
          {
            result: false,
            name: "Dev",
            conditionType: "environmentState",
            value: "4",
          },
        ],
        workflowTasks: [],
        deployPhasesSnapshot: [
          {
            deploymentInput: {
              parallelExecution: {
                parallelExecutionType: "none",
              },
              skipArtifactsDownload: false,
              timeoutInMinutes: 0,
              queueId: 2,
              demands: [],
              enableAccessToken: false,
            },
            rank: 1,
            phaseType: "agentBasedDeployment",
            name: "Run on agent",
            workflowTasks: [
              {
                taskId: "e213ff0f-5d5c-4791-802d-52ea3e7be1f1",
                version: "1.*",
                name: "PowerShell Script",
                enabled: true,
                alwaysRun: false,
                continueOnError: false,
                timeoutInMinutes: 0,
                definitionType: "task",
                inputs: {
                  scriptType: "inlineScript",
                  scriptName: "",
                  arguments: "",
                  inlineScript:
                    '# You can write your powershell scripts inline here. \n# You can also pass predefined and custom variables to this scripts using arguments\n\n Write-Host "Hello World"',
                  workingFolder: "",
                  failOnStandardError: "true",
                },
              },
            ],
          },
        ],
        owner: {
          id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          displayName: "Chuck Reinhart",
          uniqueName: "fabfiber@outlook.com",
          url: "https://vssps.dev.azure.com/fabrikam/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          imageUrl:
            "https://dev.azure.com/fabrikam/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        },
        schedules: [],
        release: {
          id: 18,
          name: "Release-18",
          url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
          _links: {
            web: {
              href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?releaseId=18&_a=release-summary",
            },
            self: {
              href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
            },
          },
        },
        releaseDefinition: {
          id: 1,
          name: "MyShuttle.CD",
          url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
          _links: {
            web: {
              href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?definitionId=1",
            },
            self: {
              href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
            },
          },
        },
        releaseCreatedBy: {
          id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          displayName: "Chuck Reinhart",
        },
        triggerReason: "After successful deployment of Dev",
      },
      {
        id: 71,
        releaseId: 18,
        name: "PPE",
        status: "notStarted",
        variables: {},
        preDeployApprovals: [],
        postDeployApprovals: [],
        preApprovalsSnapshot: {
          approvals: [
            {
              rank: 1,
              isAutomated: true,
              isNotificationOn: false,
              id: 0,
            },
          ],
        },
        postApprovalsSnapshot: {
          approvals: [
            {
              rank: 1,
              isAutomated: true,
              isNotificationOn: false,
              id: 0,
            },
          ],
        },
        deploySteps: [],
        rank: 3,
        definitionEnvironmentId: 3,
        environmentOptions: {
          emailNotificationType: "OnlyOnFailure",
          emailRecipients: "release.environment.owner;release.creator",
          skipArtifactsDownload: false,
          timeoutInMinutes: 0,
          enableAccessToken: false,
          publishDeploymentStatus: false,
        },
        demands: [],
        conditions: [
          {
            result: false,
            name: "QA",
            conditionType: "environmentState",
            value: "4",
          },
        ],
        workflowTasks: [],
        deployPhasesSnapshot: [
          {
            deploymentInput: {
              parallelExecution: {
                parallelExecutionType: "none",
              },
              skipArtifactsDownload: false,
              timeoutInMinutes: 0,
              queueId: 2,
              demands: [],
              enableAccessToken: false,
            },
            rank: 1,
            phaseType: "agentBasedDeployment",
            name: "Run on agent",
            workflowTasks: [
              {
                taskId: "e213ff0f-5d5c-4791-802d-52ea3e7be1f1",
                version: "1.*",
                name: "PowerShell Script",
                enabled: true,
                alwaysRun: false,
                continueOnError: false,
                timeoutInMinutes: 0,
                definitionType: "task",
                inputs: {
                  scriptType: "inlineScript",
                  scriptName: "",
                  arguments: "",
                  inlineScript:
                    '# You can write your powershell scripts inline here. \n# You can also pass predefined and custom variables to this scripts using arguments\n\n Write-Host "Hello World"',
                  workingFolder: "",
                  failOnStandardError: "true",
                },
              },
            ],
          },
        ],
        owner: {
          id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          displayName: "Chuck Reinhart",
          uniqueName: "fabfiber@outlook.com",
          url: "https://vssps.dev.azure.com/fabrikam/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          imageUrl:
            "https://dev.azure.com/fabrikam/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        },
        schedules: [],
        release: {
          id: 18,
          name: "Release-18",
          url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
          _links: {
            web: {
              href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?releaseId=18&_a=release-summary",
            },
            self: {
              href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
            },
          },
        },
        releaseDefinition: {
          id: 1,
          name: "MyShuttle.CD",
          url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
          _links: {
            web: {
              href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?definitionId=1",
            },
            self: {
              href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
            },
          },
        },
        releaseCreatedBy: {
          id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          displayName: "Chuck Reinhart",
        },
        triggerReason: "After successful deployment of QA",
      },
      {
        id: 72,
        releaseId: 18,
        name: "PROD",
        status: "notStarted",
        variables: {},
        preDeployApprovals: [],
        postDeployApprovals: [],
        preApprovalsSnapshot: {
          approvals: [
            {
              rank: 1,
              isAutomated: true,
              isNotificationOn: false,
              id: 0,
            },
          ],
        },
        postApprovalsSnapshot: {
          approvals: [
            {
              rank: 1,
              isAutomated: true,
              isNotificationOn: false,
              id: 0,
            },
          ],
        },
        deploySteps: [],
        rank: 4,
        definitionEnvironmentId: 4,
        environmentOptions: {
          emailNotificationType: "OnlyOnFailure",
          emailRecipients: "release.environment.owner;release.creator",
          skipArtifactsDownload: false,
          timeoutInMinutes: 0,
          enableAccessToken: false,
          publishDeploymentStatus: false,
        },
        demands: [],
        conditions: [
          {
            result: false,
            name: "PPE",
            conditionType: "environmentState",
            value: "4",
          },
        ],
        workflowTasks: [],
        deployPhasesSnapshot: [
          {
            deploymentInput: {
              parallelExecution: {
                parallelExecutionType: "none",
              },
              skipArtifactsDownload: false,
              timeoutInMinutes: 0,
              queueId: 2,
              demands: [],
              enableAccessToken: false,
            },
            rank: 1,
            phaseType: "agentBasedDeployment",
            name: "Run on agent",
            workflowTasks: [
              {
                taskId: "e213ff0f-5d5c-4791-802d-52ea3e7be1f1",
                version: "1.*",
                name: "PowerShell Script",
                enabled: true,
                alwaysRun: false,
                continueOnError: false,
                timeoutInMinutes: 0,
                definitionType: "task",
                inputs: {
                  scriptType: "inlineScript",
                  scriptName: "",
                  arguments: "",
                  inlineScript:
                    '# You can write your powershell scripts inline here. \n# You can also pass predefined and custom variables to this scripts using arguments\n\n Write-Host "Hello World"',
                  workingFolder: "",
                  failOnStandardError: "true",
                },
              },
            ],
          },
        ],
        owner: {
          id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          displayName: "Chuck Reinhart",
          uniqueName: "fabfiber@outlook.com",
          url: "https://vssps.dev.azure.com/fabrikam/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          imageUrl:
            "https://dev.azure.com/fabrikam/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        },
        schedules: [],
        release: {
          id: 18,
          name: "Release-18",
          url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
          _links: {
            web: {
              href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?releaseId=18&_a=release-summary",
            },
            self: {
              href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
            },
          },
        },
        releaseDefinition: {
          id: 1,
          name: "MyShuttle.CD",
          url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
          _links: {
            web: {
              href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?definitionId=1",
            },
            self: {
              href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
            },
          },
        },
        releaseCreatedBy: {
          id: "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
          displayName: "Chuck Reinhart",
        },
        triggerReason: "After successful deployment of PPE",
      },
    ],
    variables: {},
    variableGroups: [],
    artifacts: [
      {
        sourceId: "d07908bc-118f-47d2-8a13-ff75601a6b1a:1",
        type: "Build",
        alias: "Fabrikam.CI",
        definitionReference: {
          artifactSourceDefinitionUrl: {
            id: "https://dev.azure.com/fabrikam/_permalink/_build/index?collectionId=13d3daac-03b8-4a23-9cc4-2c3de65dab63&projectId=d07908bc-118f-47d2-8a13-ff75601a6b1a&definitionId=1",
            name: "",
          },
          defaultVersionBranch: {
            id: "",
            name: "",
          },
          defaultVersionSpecific: {
            id: "",
            name: "",
          },
          defaultVersionTags: {
            id: "",
            name: "",
          },
          defaultVersionType: {
            id: "latestType",
            name: "Latest",
          },
          definition: {
            id: "1",
            name: "Fabrikam.CI",
          },
          project: {
            id: "d07908bc-118f-47d2-8a13-ff75601a6b1a",
            name: "MyFirstProject",
          },
          version: {
            id: "2",
            name: "2",
          },
          artifactSourceVersionUrl: {
            id: "https://dev.azure.com/fabrikam/_permalink/_build/index?collectionId=13d3daac-03b8-4a23-9cc4-2c3de65dab63&projectId=d07908bc-118f-47d2-8a13-ff75601a6b1a&buildId=2",
            name: "",
          },
          branch: {
            id: "refs/heads/master",
            name: "refs/heads/master",
          },
        },
        isPrimary: true,
      },
    ],
    releaseDefinition: {
      id: 1,
      name: "MyShuttle.CD",
      url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
      _links: {
        self: {
          href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
        },
        web: {
          href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?definitionId=1",
        },
      },
    },
    description: "Creating Sample release",
    reason: "manual",
    releaseNameFormat: "Release-$(rev:r)",
    keepForever: false,
    definitionSnapshotRevision: 1,
    logsContainerUrl:
      "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18/logs",
    url: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
    _links: {
      self: {
        href: "https://vsrm.dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/releases/18",
      },
      web: {
        href: "https://dev.azure.com/fabrikam/d07908bc-118f-47d2-8a13-ff75601a6b1a/_release?releaseId=18&_a=release-summary",
      },
    },
    tags: [],
    projectReference: {
      id: "d07908bc-118f-47d2-8a13-ff75601a6b1a",
      name: null,
    },
    properties: {},
  },
];
