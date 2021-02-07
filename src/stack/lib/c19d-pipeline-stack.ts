import {Construct, Stack, StackProps, Stage} from '@aws-cdk/core';
import {CdkPipeline} from '@aws-cdk/pipelines';
import {Artifact} from '@aws-cdk/aws-codepipeline';
import {C19dServicesStack} from './c19d-services-stack';

class C19dApplication extends Stage {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new C19dServicesStack(this, 'c19d-services');
  }
}

export class C19dPipelineStack extends Stack {
  constructor(scope: Construct, id: string, params: StackProps) {
    super(scope, id);
    const sourceArtifact = new Artifact();
    const cloudAssemblyArtifact = new Artifact();

    const pipeline = new CdkPipeline(this, 'C19dPipeline', {
      cloudAssemblyArtifact,
    });

    pipeline.addApplicationStage(
      new C19dApplication(this, 'C19dApplication', {
        env: {
          region: 'eu-south-1',
        },
      })
    );
  }
}
