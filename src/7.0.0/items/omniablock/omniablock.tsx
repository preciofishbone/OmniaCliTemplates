import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { $outputname$Styles } from './$outputname$.css';
import { $outputname$BlockSettings } from './$outputname$Settings';

@Component
export default class $outputname$ extends VueComponentBase implements IWebComponentInstance {
    

    private $outputname$Classes = StyleFlow.use($outputname$Styles);

    @BlockSettingsReader<$outputname$BlockSettings>({
        defaultValue: { title: 'my block title'},
        editElement: "$element$-settings"
    })
    protected settings: $outputname$BlockSettings;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.$outputname$Classes.container}>
                {this.settings.title}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$);
});