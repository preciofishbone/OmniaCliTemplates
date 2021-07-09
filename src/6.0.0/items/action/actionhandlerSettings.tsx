import { Inject, IWebComponentInstance, Localize, OmniaContext, vueCustomElement, WebComponentBootstrapper } from '@omnia/fx'
import { ActionHandler, IActionHandlerSettingsComponent, IOmniaContext } from '@omnia/fx-models'
import { VueComponentBase } from "@omnia/fx/ux"
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import {$outputname$SettingsStyles} from './$outputname$SettingsStyles.css';
import {$outputname$HandlerSettings} from './model/$outputname$Settings'


@Component
export class $outputname$SettingsComponent extends VueComponentBase implements IActionHandlerSettingsComponent, IWebComponentInstance {
    @Prop() actionHandler: ActionHandler;
    @Prop() updateActionHandler: () => void;
    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    created() {
        if (!this.actionHandler.settings) {
            (this.actionHandler.settings as $outputname$HandlerSettings) = {}
            this.updateActionHandler();
        } else {
            let typedSettings = this.actionHandler.settings as $outputname$HandlerSettings;
        }
    }




    render(h) {
        return (
            <div>
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$SettingsComponent);
});

