import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject, SubscriptionHandler, Utils } from "@omnia/fx";
import { StyleFlow } from '@omnia/fx/ux';
import { SettingsService, SettingsServiceConstructor } from '@omnia/fx/services';
import { $outputname$Styles } from './$outputname$.css';
import { $outputname$BlockData } from './$outputname$Setting';

@Component
export default class $outputname$ extends Vue implements IWebComponentInstance {

    @Prop() settingsKey: string;
    
    @Inject<SettingsServiceConstructor>(SettingsService) private settingsService: SettingsService<$outputname$BlockData>;
    @Inject(SubscriptionHandler) private subscriptionHandler: SubscriptionHandler;

    private $outputname$Classes = StyleFlow.use($outputname$Styles);
    private blockData: $outputname$BlockData = {
        data: null,
        settings: {title: 'title initial value'}
    };

    created() {
        this.settingsService.suggestKeyRenderer(this.settingsKey, "$element$-settings");
        this.subscriptionHandler.add(this.settingsService
            .onKeyValueUpdated(this.settingsKey)
            .subscribe(this.setBlockData));
        this.settingsService.getValue(this.settingsKey).then((blockData) => {
            if (blockData) {
                this.setBlockData(blockData)
            }
        });
    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    private setBlockData(blockData: $outputname$BlockData) {
        this.blockData = Utils.clone(blockData);
    }

    render(h) {
        return (
            <div class={this.$outputname$Classes.container}>
                {this.blockData.settings.title}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$);
});