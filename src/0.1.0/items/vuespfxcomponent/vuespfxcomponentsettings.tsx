import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import {
    vueCustomElement,
    IWebComponentInstance,
    WebComponentBootstrapper,
    Localize,
    Inject
} from "@omnia/fx";

import { SettingsServiceConstructor, SettingsService } from "@omnia/fx/services";
import { SettingsPaneModel } from '@omnia/fx/ux';
import { I$outputname$Settings, $outputname$Settings } from './I$outputname$Settings';

@Component
export default class $outputname$SettingsForm extends Vue implements IWebComponentInstance, I$outputname$Settings {
    @Prop() opened: boolean;
    @Prop() settingsKey: string;
    @Prop() onClosed: () => void;

    @Inject<SettingsServiceConstructor>(SettingsService) protected settingsService: SettingsService<$outputname$Settings>;

    private settingsPaneModel: SettingsPaneModel = { visible: this.opened }
    private settings: $outputname$Settings = { title: "" };

    created() {
        this.settingsService.getValue(this.settingsKey).then((settings) => {
            if (settings != null) {
                this.settings = settings;
            }
        });
    }

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    // close dialog
    private close() {
        this.settingsPaneModel.visible = false;

        if (this.onClosed) {
            this.onClosed();
        }
    }

    //save settings
    private save(): Promise<boolean> {
        return new Promise<boolean>((resolveSaved) => {
            this.settingsService.setValue(this.settingsKey, this.settings).then((savedSettings) => {
                this.settings = savedSettings;
                resolveSaved(true);
                this.close();
            });
        });
    }

    render(h) {
        if (this.settingsPaneModel.visible) {
            return (
                <omfx-settings-pane
                    contentClass="omfx-theme"
                    headerClass="omfx-theme-primary-bg"
                    title="$outputname$Settings"
                    model={this.settingsPaneModel}
                    onSave={this.save}
                    onCancel={this.close}
                    showButtons={true}>
                    <div>
                        <v-text-field v-model={this.settings.title} label="Title"></v-text-field>
                    </div>
                </omfx-settings-pane>
            );
        } else {
            return null;
        }
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$SettingsForm);
});