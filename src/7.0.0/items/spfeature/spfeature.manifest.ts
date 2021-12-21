import { Composer } from '@omnia/tooling/composers';
import { Guid, TargetResolverTypes, FontAwesomeIcon, RoleDefinitions } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("$guid1$"), "$outputname$")
    .registerFeature({
        version: "0.1.0",
        category: "Custom",
        title: "$outputname$",
        description: "Enter description here",
        targetResolverType: TargetResolverTypes.AppInstance,
        icons: [new FontAwesomeIcon("fas fa-pen-alt")],
        parameters: [],
        hasProviderHandling: true,
        permissionRole: RoleDefinitions.AppInstanceAdmin,
        hidden: false
    });
