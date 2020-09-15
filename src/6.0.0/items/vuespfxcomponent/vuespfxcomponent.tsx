import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { SubscriptionHandler, vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { SettingsServiceConstructor, SettingsService } from '@omnia/fx/services';
import { StyleFlow, VueComponentBase } from '@omnia/fx/ux';
import { $outputname$Settings } from './I$outputname$Settings';
import { $outputname$Styles } from './$outputname$.css';

@Component
export default class $outputname$ extends VueComponentBase implements IWebComponentInstance {

    @Prop() settingsKey: string;

    @Inject(SubscriptionHandler)
    private subscriptionHandler: SubscriptionHandler;

    @Inject<SettingsServiceConstructor>(SettingsService)
    private settingsService: SettingsService<$outputname$Settings>;

    private settings: $outputname$Settings = { title: ""};
    private $outputname$Classes = StyleFlow.use($outputname$Styles);

    created() {
        this.settingsService.suggestKeyRenderer(this.settingsKey, "$element$-settings");

        this.settingsService.getValue(this.settingsKey).then((result) => {
            this.settings = result || this.settings;
        });

        this.subscriptionHandler.add(
            this.settingsService
                .onKeyValueUpdated(this.settingsKey)
                .subscribe(result => this.settings = result));
    }

    mounted() {

        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.$outputname$Classes.container}>
                <h1>My Setting: {this.settings.title}</h1>
            </div>

        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$);
});