import { ActionHandlerRegistrationId, Guid } from '@omnia/fx/models';
import { Composer } from '@omnia/tooling/composers';

Composer.registerManifest(new Guid("$guid1$"), "$outputname$.settings")
    .registerWebComponent({
        elementName: "$element$-settings",
        entryPoint: "./$outputname$Settings.jsx"
    });


Composer.registerManifest(new Guid("$guid2$"), "$outputname$.handler")
    .registerResources({
        resourcePaths: ["./$outputname$Handler.js"]
    })
    .extendApi(api => api.fx.ux.actions.handlers.configure(ActionHandlerRegistrationId.create(new Guid("$guid3$"))))
    .extendApi(api => api.fx.ux.actions.registrations);






