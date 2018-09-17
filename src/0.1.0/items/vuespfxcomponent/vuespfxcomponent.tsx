import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { SettingsServiceConstructor, SettingsService } from '@omnia/fx/services';
import { OpenSpfxWebPartSettingsFormTopic } from "@omnia/fx/spfx"
import { $outputname$Settings } from './I$outputname$Settings';
import {$outputname$Styles} from './$outputname$.css';

@Component
export default class $outputname$ extends Vue implements IWebComponentInstance {

    @Prop() settingsKey: string;

    @Inject<SettingsServiceConstructor>(SettingsService) private settingsService: SettingsService<$outputname$Settings>;

    private settingsOpen: boolean = false;
    private settings: $outputname$Settings = { title: ""};

    created() {
        this.settingsService.getValue(this.settingsKey).then((settings) => {
            if (settings != null) {
                this.settings = settings;
            }
        });

        if (!this.settingsService.onKeyValueUpdated(this.settingsKey).isSubscribing(this.onNewSettings)) {
            this.settingsService.onKeyValueUpdated(this.settingsKey).subscribe(this.onNewSettings);
        }
    }

    mounted() {

        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);

        OpenSpfxWebPartSettingsFormTopic(this.settingsKey).subscribe(this.subcribeOpenSettingForm);

    }

    beforeDestroy() {
        OpenSpfxWebPartSettingsFormTopic(this.settingsKey).unsubscribe(this.subcribeOpenSettingForm);
    }

    subcribeOpenSettingForm() {
        this.settingsOpen = true;
    }

    private onNewSettings(updatedValue: $outputname$Settings) {
        this.settings = updatedValue;
    }

    private openSettings() {
        this.settingsOpen = true;
    }

    private close() {
        this.settingsOpen = false;
    }

    render(h) {
        return (
            <div class={$outputname$Styles.container}>
                <h1>My Setting: {this.settings.title}</h1>
                {this.settingsOpen ?
                    <$element$-settings
                        opened={this.settingsOpen}
                        settingskey={this.settingsKey}
                        onClosed={this.close}>
                    </$element$-settings>
                    : null
                }
            </div>

        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$);
});