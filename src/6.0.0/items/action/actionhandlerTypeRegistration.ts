import { extendApi } from '@omnia/fx';
import { Guid,ActionHandlerManifestId,ActionHandlerRegistrationId } from "@omnia/fx/models";

extendApi(api => api.fx.ux.actionHandler.registration,
    registerApi => {
        registerApi.registerHandler([
            {
                id:   ActionHandlerRegistrationId.create(new Guid("$guid4$")),
                title: "$outputname$", //$Localize:$outputname$.ButtonText;
                settingsElementName: "$element$-settings",
                customInitializer: true,
                handlerManifestId: ActionHandlerManifestId.create(new Guid("$guid3$"))
            }
        ])
    })


