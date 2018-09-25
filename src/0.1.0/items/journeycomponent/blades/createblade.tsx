import { Console } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import { JourneyInstance, Blade, BladeSizes } from '@omnia/fx/ux';
import { $outputname$Journeys } from '../$outputname$';

export interface CreateBladeProps {
    journey: () => JourneyInstance;
}

export interface CreateBladeEvents {

}

export interface CreateBladeScopedSlots {

}

@Component
export default class CreateBlade extends tsx.Component<
CreateBladeProps,
CreateBladeEvents,
CreateBladeScopedSlots
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

                        <v-btn icon onClick={() => { this.journey().travelBack() }}>
                            <v-icon>close</v-icon>
                        </v-btn>

                </v-toolbar>

                <v-divider></v-divider>

                <v-card-text>
                    Put your logic here
                </v-card-text>
            </v-card>

        </v-layout>
    }
}