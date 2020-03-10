import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { Blade, BladeSizes, JourneyInstance } from '@omnia/fx/ux';
import { I$outputname$ } from './I$outputname$';
import { $outputname$Styles } from './$outputname$.css';
import HomeBlade from './blades/HomeBlade';
import CreateBlade from './blades/CreateBlade';

@Component
export default class $outputname$ extends Vue implements IWebComponentInstance, I$outputname$ {

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
            id: 'home',
            size: BladeSizes.medium,
            content: <HomeBlade journey={this.getJourneyInstance}></HomeBlade>
        }

        return blade;
    }

    getCreateBlade() {
        let h = this.$createElement;
        let blade: Blade = {
            id: 'create',
            size: BladeSizes.medium,
            content: <CreateBlade journey={this.getJourneyInstance}></CreateBlade>
        }

        return blade;
    }

    render(h) {
        return (
            <omfx-journey onInstanceCreated={this.gotInstance} 
                blades={[
                    this.getHomeBlade(), 
                    this.getCreateBlade()
                    ]}>
            </omfx-journey>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$);
});

const BladeIds = {

    home: "home",
    create: "create",

}

export const $outputname$Destinations = {

    home: [BladeIds.home],
    create: [BladeIds.home, BladeIds.create],

}