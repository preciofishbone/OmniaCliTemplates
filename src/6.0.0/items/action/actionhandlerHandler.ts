import { extendApi, Injectable } from "@omnia/fx";
import { ActionHandlerRegistrationId, Guid, InstanceLifetimes } from "@omnia/fx/models";
import { ActionHandlerBase, ActionHandlerRegistration } from "@omnia/fx/ux";
import { $outputname$HandlerSettings } from "./model/$outputname$Settings";


@Injectable({
    lifetime: InstanceLifetimes.Transient
})
export class $outputname$ActionHandler extends ActionHandlerBase {
    static typeId = ActionHandlerRegistrationId.create(new Guid("$guid3$"))

    onActivated() {
        //Here we can do some initialization

        //e.g check some condition to hide/show the button
        let matchCondition = true;

        if (!matchCondition) {
            this.hidden = false; //hide the button if not match the condition
        }
        
    }

    onTriggered(renderingCallback: (elementName: string, themeTargetId?: string) => void) {
        //Here we can handle when the button is clicked

        //We can trigger some code run
        //...


        //Or we render a dialog
        //renderingCallback("{put-a-dialog-web-element-name-here}");

        if ((this.settings as $outputname$HandlerSettings).alertWhenClick) {
            alert('bingo!');
        }
    }

    onDisposing() {
        
    }
}

extendApi(api => api.fx.ux.actions.handlers, api => api.register(new ActionHandlerRegistration($outputname$ActionHandler.typeId, $outputname$ActionHandler)));

extendApi(api => api.fx.ux.actions.registrations,
    registerApi => {
        registerApi.registerActionHandler([
            {
                id: $outputname$ActionHandler.typeId,
                title: "$outputname$", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
                settingsElementName: "$element$-settings"
            }
        ]);
    })

