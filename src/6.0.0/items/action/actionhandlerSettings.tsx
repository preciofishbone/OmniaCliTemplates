import { Inject, IWebComponentInstance, Utils, Localize, OmniaContext, vueCustomElement, WebComponentBootstrapper } from '@omnia/fx'
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

    private currentSettings: $outputname$HandlerSettings = null;

    created() {
        if (!this.actionHandler.settings) {
            (this.actionHandler.settings as $outputname$HandlerSettings) = { alertWhenClick: true }
            this.updateActionHandler();
        }
        this.currentSettings = this.actionHandler.settings as $outputname$HandlerSettings;
    }

    private updateSettings(){
        this.actionHandler.settings = Utils.clone(this.currentSettings);
        this.updateActionHandler();
    }

    render(h) {
        return (
            <div>
                <v-checkbox
                    label="Alert when click"
                    input-value={this.currentSettings.alertWhenClick}
                    onChange={(val)=>{
                        this.currentSettings.alertWhenClick = val;
                        this.updateSettings();
                    }}
                >
                 </v-checkbox>
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$SettingsComponent);
});

