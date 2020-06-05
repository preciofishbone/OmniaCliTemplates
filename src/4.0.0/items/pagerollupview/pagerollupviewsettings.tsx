import { VueComponentBase } from '@omnia/fx/ux';
import { IWebComponentInstance, WebComponentBootstrapper, vueCustomElement } from '@omnia/fx';
import { IPageRollupViewSettingsInterface, PageRollupViewSettings } from '@omnia/wcm/models';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { EnterprisePropertyDefinition, PropertyIndexedType } from '@omnia/fx-models';

export interface $outputname$Settings extends PageRollupViewSettings {
    imageProp: string;
    size: number;
}

@Component
export class $outputname$SettingsComponent extends VueComponentBase implements IWebComponentInstance, IPageRollupViewSettingsInterface<$outputname$Settings> {
    @Prop() styles: any;

    @Prop() availableProperties: Array<EnterprisePropertyDefinition>;
    @Prop() onUpdatedViewSettings: (viewSettings: $outputname$Settings) => void;
    @Prop() viewSettings: $outputname$Settings;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
        this.updateSelectProperties();
    }

    updateSettings() {
        this.onUpdatedViewSettings(this.viewSettings);
    }

    updateSelectProperties() {
        this.viewSettings.selectProperties.length = 0;
        if (this.viewSettings.imageProp) {
            this.viewSettings.selectProperties.push(this.viewSettings.imageProp);
            this.viewSettings.pageDialogPropsMapping.contentImgProp = this.viewSettings.imageProp;
        }

        this.updateSettings();
    }


    render(h) {
        let imageProperties = this.availableProperties.filter(p => p.enterprisePropertyDataType.indexedType == PropertyIndexedType.Media);
        return (
            <div>
                <v-autocomplete
                    label='Image'
                    items={imageProperties}
                    item-text='multilingualTitle'
                    item-value='internalName'
                    v-model={this.viewSettings.imageProp}
                    onChange={() => { this.updateSelectProperties() }}>
                </v-autocomplete>
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$SettingsComponent);
});


