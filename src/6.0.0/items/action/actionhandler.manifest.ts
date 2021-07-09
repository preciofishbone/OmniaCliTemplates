import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';

Composer.registerManifest(new Guid("$guid1$"), "$outputname$.settings")
    .registerWebComponent({
        elementName: "$element$-settings",
        entryPoint: "./$outputname$.jsx"
    });

Composer
    .registerManifest(new Guid("$guid2$"), "$outputname$.registration")
    .registerResources({ resourcePaths: ["./$outputname$Registration.js"] })
    .extendApi(api => api.fx.ux.actionHandler.registration)

Composer.registerManifest(new Guid("$guid3$"), "$outputname$.handler")
    .registerResources({
        resourcePaths: ["./$outputname$ClickHandler.js"]
    })


