import { Console, Inject } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import { OmniaTheming, VueComponentBase } from '@omnia/fx/ux';
import { $outputname$Store } from '../store/$outputname$Store';
import { JourneyInstance, ButtonPreset, ButtonModes } from '@omnia/fx-models';

export interface EditBladeProps {
    journey: () => JourneyInstance;
}

export interface EditBladeEvents {

}

export interface EditBladeScopedSlots {

}

@Component
export default class EditBlade extends VueComponentBase<
EditBladeProps,
EditBladeEvents,
EditBladeScopedSlots
> {
    @Inject($outputname$Store) private store: $outputname$Store;
    @Inject(OmniaTheming) private omniaTheming: OmniaTheming;

    @Prop() journey: () => JourneyInstance;

    public mounted() {

    }

    private addOrUpdate() {
        this.store.actions.addOrUpdate.dispatch();
    }

    private closeBlade() {
        this.journey().travelBack();
    }

    public render(h) {
        let item = this.store.getters.editingItem();

        return (
            <div>
                <v-app-bar flat dark={this.omniaTheming.promoted.header.dark} color={this.omniaTheming.promoted.header.background.base}>
                    <v-toolbar-title>{item.title}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <omfx-button
                        dark={this.omniaTheming.promoted.header.dark}
                        onClick={() => { this.closeBlade() }}
                        preset={ButtonPreset.CloseIconButton}>
                    </omfx-button>
                </v-app-bar>
                <v-divider></v-divider>

                <v-card-text>
                    <v-text-field label="Title" v-model={item.title}></v-text-field>
                    <omfx-button
                        mode={ButtonModes.flat}
                        text='Save'
                        onClick={() => { this.addOrUpdate() }}
                    ></omfx-button>
                </v-card-text>
            </div>
        )
    }
}