import { Console } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { JourneyInstance, Blade, BladeSizes } from '@omnia/fx/ux';
import { $outputname$Destinations } from '../$outputname$';

export interface HomeBladeProps {
    journey: () => JourneyInstance;
}

export interface HomeBladeEvents {

}

export interface HomeBladeScopedSlots {

}

@Component
export default class HomeBlade extends tsx.Component<
HomeBladeProps,
HomeBladeEvents,
HomeBladeScopedSlots
> {

    @Prop() journey: () => JourneyInstance;

    public mounted() {

    }


    public render(h) {
        return <v-layout width="100%">
            <v-card width="100%">
                <v-toolbar card prominent>
                    <v-toolbar-title >$outputname$</v-toolbar-title>
                    <v-spacer></v-spacer>

                    <v-btn icon onClick={() => { this.journey().travelTo($outputname$Destinations.create); }}>
                        <v-icon>add</v-icon>
                    </v-btn>

                </v-toolbar>

                <v-divider></v-divider>

                <v-card-text>
                    Put some content here
                </v-card-text>
            </v-card>

        </v-layout>
    }
}