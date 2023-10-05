import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("$guid1$"), "$outputname$.settings")
    .registerWebComponent({
        elementName: "$element$-settings",
        entryPoint: "./$outputname$Settings.jsx"
    });

Composer
    .registerManifest(new Guid("$guid2$"), "$outputname$.view")
    .registerWebComponent({
        elementName: "$element$-view",
        entryPoint: "./$outputname$.jsx"
    });
