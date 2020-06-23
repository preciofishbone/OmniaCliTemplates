import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { Blade, BladeSizes, JourneyInstance } from '@omnia/fx/ux';
import { $outputname$Styles } from './$outputname$.css';
import HomeBlade from './blades/HomeBlade';
import EditBlade from './blades/EditBlade';
import { $outputname$Destinations, $outputname$BladeIds } from './$outputname$Constants';

@Component
export default class $outputname$ extends Vue implements IWebComponentInstance {

    journey: JourneyInstance;

    mounted() {

        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);

    }

    getJourneyInstance() {
        //Need to use method callback to get instance since it dosent exist when bootstrapped
        return this.journey;
    }

    private gotInstance(instance: JourneyInstance) {

        this.journey = instance;
        this.journey.travelTo($outputname$Destinations.home);

    }

    getHomeBlade() {
        let h = this.$createElement;
        let blade: Blade = {
            id: $outputname$BladeIds.home,
            size: BladeSizes.medium,
            content: <HomeBlade journey={this.getJourneyInstance}></HomeBlade>
        }

        return blade;
    }

    getEditBlade() {
        let h = this.$createElement;
        let blade: Blade = {
            id: $outputname$BladeIds.edit,
            size: BladeSizes.medium,
            content: <EditBlade journey={this.getJourneyInstance}></EditBlade>
        }

        return blade;
    }

    render(h) {
        return (
            <omfx-journey onInstanceCreated={this.gotInstance} 
                blades={[
                    this.getHomeBlade(), 
                    this.getEditBlade()
                    ]}>
            </omfx-journey>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$);
});
