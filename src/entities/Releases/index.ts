import { Environment, Release } from "./types";

import INITIAL_DATA from "../../../initialData";

interface ReleaseArgs {
  releaseId: number;
  environmentId: number;
}

interface GetEnvironmentByReleaseId extends ReleaseArgs {}

interface AddReleaseEnvironment extends Omit<ReleaseArgs, "environmentId"> {
  environment: Environment;
}

class Releases {
  private static instance: Releases;
  private releases: Release[] = [];
  constructor() {
    this.releases = INITIAL_DATA as Release[];
  }

  public static getInstance() {
    if (!Releases.instance) {
      Releases.instance = new Releases();
    }

    return Releases.instance;
  }

  addReleaseEnvironment({ environment, releaseId }: AddReleaseEnvironment) {
    const release = this.releases.find((release) => release.id === releaseId);

    if (release) {
      // validate the id doesn't already exist
      const environmentExists = release.environments.find(
        (env) => env.id === environment.id
      );

      if (environmentExists) {
        return { message: "that environment already exists" };
      }

      const cloneEnv = release.environments[0];

      const newEnv = { ...cloneEnv, ...environment };

      this.releases = this.releases.map((release) =>
        release.id === releaseId
          ? {
              ...release,
              environments: [...release.environments, newEnv],
            }
          : release
      );
      return newEnv;
    }
  }

  getReleaseProdEnvironment({ releaseId }: Pick<ReleaseArgs, "releaseId">) {
    const release = this.releases.find((release) => releaseId === release.id);
    if (release) {
      const prodEnv = release.environments.find(
        (environment) => environment.name === "PROD"
      );
      return {
        id: prodEnv?.id,
        name: prodEnv?.name,
        status: prodEnv?.status,
        releaseCreatedBy: prodEnv?.releaseCreatedBy,
      };
    }
  }

  getEnvironmentsByReleaseId(id: number) {
    return this.releases.find((release) => release.id === id);
  }

  getEnvironmentByReleaseId({
    environmentId,
    releaseId,
  }: GetEnvironmentByReleaseId) {
    const release = this.releases.find((release) => release.id === releaseId);

    if (release) {
      return release.environments?.find(
        (environment) => environment.id === environmentId
      );
    }
  }
}

const releases = Releases.getInstance();

export default releases;
