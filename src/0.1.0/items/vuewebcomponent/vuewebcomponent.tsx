import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { $outputname$Styles } from './$outputname$.css';

@Component
export default class $outputname$ extends Vue implements IWebComponentInstance {

    mounted() {

        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);

    }

    render(h) {
        return (
            <div class={$outputname$Styles.container}>Hello $outputname$!</div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$);
});