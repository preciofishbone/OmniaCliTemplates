import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject, SubscriptionHandler, Utils} from "@omnia/fx";
import { StyleFlow } from '@omnia/fx/ux';
import { SettingsService, SettingsServiceConstructor } from '@omnia/fx/services';
import { $outputname$SettingStyles } from './$outputname$Setting.css';
import { BlockDataWithSettingsAndData } from "@omnia/wcm/models";

export interface $outputname$BlockDataData{
    
}

export interface $outputname$BlockDataSettings{
    title: string;
}


export interface $outputname$BlockData extends BlockDataWithSettingsAndData<$outputname$BlockDataData,$outputname$BlockDataSettings> {};


@Component
export default class $outputname$Setting extends Vue implements IWebComponentInstance {
    
    @Prop() settingsKey: string;

    @Inject(SubscriptionHandler) private subscriptionHandler: SubscriptionHandler;
    @Inject<SettingsServiceConstructor>(SettingsService) private settingsService: SettingsService<$outputname$BlockData>;

    private $outputname$SettingClasses = StyleFlow.use($outputname$SettingStyles);
    private blockData: $outputname$BlockData = {
        data: null,
        settings: {title: 'title initial value'}
    };

    created() {
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

    beforeDestroy(){
        this.subscriptionHandler.unsubscribe();
    }

    private setBlockData(blockData: $outputname$BlockData) {
        this.blockData = Utils.clone(blockData);
    }

    private updateBlockData(){
        this.settingsService.setValue(this.settingsKey, this.blockData);
    }

    render(h) {
        return (
            <v-card flat>
                <v-card-text>
                    <v-text-field
                        filled
                        v-model={this.blockData.settings.title}
                        onChange={() => { this.updateBlockData(); }}
                        label='Title'></v-text-field>
                </v-card-text>
            </v-card>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$Setting);
});