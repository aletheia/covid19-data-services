import {Construct, Stack, StackProps, Stage, SecretValue} from '@aws-cdk/core';
import {CdkPipeline, SimpleSynthAction} from '@aws-cdk/pipelines';
import {Artifact} from '@aws-cdk/aws-codepipeline';
import {GitHubSourceAction} from '@aws-cdk/aws-codepipeline-actions';
import {C19dServicesStack} from './c19d-services-stack';

class C19dApplication extends Stage {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new C19dServicesStack(this, 'c19d-services', props);
  }
}

export class C19dPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id);
    const sourceArtifact = new Artifact();
    const sourceAction = new GitHubSourceAction({
      actionName: 'GitHub',
      output: sourceArtifact,
      oauthToken: SecretValue.secretsManager('github-token'),
      owner: 'aletheia',
      repo: 'covid19-data-services',
      branch: 'master',
    });
    const cloudAssemblyArtifact = new Artifact();

    const synthAction = SimpleSynthAction.standardNpmSynth({
      sourceArtifact,
      cloudAssemblyArtifact,
      buildCommand: 'npm run build',
    });

    const pipeline = new CdkPipeline(this, 'C19dPipeline', {
      pipelineName: 'c19d-pipeline',
      crossAccountKeys: false,
      cloudAssemblyArtifact,
      sourceAction,
      synthAction,
    });

    pipeline.addApplicationStage(new C19dApplication(this, 'C19dApplication'));
  }
}
