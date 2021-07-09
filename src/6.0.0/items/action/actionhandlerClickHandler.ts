import { Extend, extendApi } from "@omnia/fx";
import { ActionInitializeMessage, ActionTriggeredMessage, ActionHandlerRegistrationId } from '@omnia/fx-models';
import { Guid } from '@omnia/fx/models';
import {$outputname$HandlerSettings} from './model/$outputname$Settings'

class $outputname$ClickHandler {
    constructor() {
        Extend.fx.ux.actionHandler.events.then(events => {
            events.initializeAction.subscribe(this.onActionInitialized)
            events.actionTriggered.subscribe(this.onActionTriggered)
        })
    }
    onActionInitialized(message: ActionInitializeMessage) {
        if (message.actionHandler.typeId !== ActionHandlerRegistrationId.create(new Guid("$guid4$"))){
            return;
        }
        if (!message.actionHandler.settings) {
            return;
        }
        let typedSettings: $outputname$HandlerSettings = message.actionHandler.settings as $outputname$HandlerSettings;
    }
    onActionTriggered(message: ActionTriggeredMessage) {
        if (message.actionHandler.typeId !== ActionHandlerRegistrationId.create(new Guid("$guid4$"))){
            return;
        }
        let typedSettings: $outputname$HandlerSettings = message.actionHandler.settings as $outputname$HandlerSettings;
    }
}
extendApi(api => api.fx.ux.actionHandler.events, () => { new $outputname$ClickHandler() });



