import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";

Composer
    .registerManifest("$serviceid$", "$namespace$")
    .registerService({ description: "Description of $namespace$" })
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        enableAutoAddManifestDependency: true
    })
    .AsWebApp();
   