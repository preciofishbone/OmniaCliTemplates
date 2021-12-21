import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsWriter } from '@omnia/fx/ux';
import { $outputname$SettingsStyles } from './$outputname$Settings.css';
import { IBlockSettingsWriter } from '@omnia/fx-models';


export interface $outputname$BlockSettings{
    title: string;
}

@Component
export default class $outputname$Settings extends VueComponentBase implements IWebComponentInstance {
    
    private $outputname$SettingsClasses = StyleFlow.use($outputname$SettingsStyles);
    
    @BlockSettingsWriter<$outputname$BlockSettings>({
        defaultValue: { title: 'my block title'}
    })
    protected settings: IBlockSettingsWriter<$outputname$BlockSettings>;

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <v-card flat>
                <v-card-text>
                    <v-text-field
                        filled
                        v-model={this.settings.title}
                        label='Title'></v-text-field>
                </v-card-text>
            </v-card>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$Settings);
});