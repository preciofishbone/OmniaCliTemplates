import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("$serviceid$"), "$namespace$")
    .registerService({ description: "Description of $namespace$" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("$guid2$"),
                minChunks: 2
            }
        }
    });

DevelopmentEnvironment
    .hosting
    .use({
        port: 443$num2$
    })


