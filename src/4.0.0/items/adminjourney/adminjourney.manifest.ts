import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("$guid1$"), "$outputname$")
    .registerWebComponent({
        elementName: "$element$",
        entryPoint: "./$outputname$.jsx"
    });

Composer
    .registerManifest("$guid2$", "$outputname$.core")
    .registerResources({
        resourcePaths: [
            './store/**/*.js',
            './model/index.js',
            "./$outputname$Constants.js"
        ]
    })