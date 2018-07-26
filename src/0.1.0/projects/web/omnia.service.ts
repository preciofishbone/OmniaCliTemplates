import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("$serviceid$"), "$namespace$")
    .registerService({ description: "Description of $namespace$" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        enableAutoAddManifestDependency: true
    });
    
   