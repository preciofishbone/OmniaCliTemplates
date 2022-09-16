import { ButtonPresets, defineVueComponent, OmniaTheming, useJourney } from "@omnia/fx/ux";
import { ButtonModes } from "@omnia/fx-models";
import { useInject } from "@omnia/fx";
import { $outputname$Store } from "../store/$outputname$Store";

export default defineVueComponent({
    setup(props) {
        const omniaTheming = useInject(OmniaTheming);
        const store = useInject($outputname$Store);
        const journey = useJourney();

        const addOrUpdate = () => {
            store.actions.addOrUpdate.dispatch();
        };

        const closeBlade = () => {
            journey.travelBack();
        };

        return () => (
            <div>
                <v-app-bar
                    flat
                    dark={omniaTheming.promoted.header.dark}
                    color={omniaTheming.promoted.header.background.base}>
                    <v-toolbar-title>{item.title}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <omfx-button
                        dark={omniaTheming.promoted.header.dark}
                        onClick={closeBlade}
                        preset={ButtonPresets.icons.close}>
                    </omfx-button>
                </v-app-bar>
                <v-divider></v-divider>

                <v-card-text>
                    <v-text-field
                        label="Title"
                        v-model={item.title}>
                    </v-text-field>
                    <omfx-button
                        mode={ButtonModes.flat}
                        text='Save'
                        onClick={addOrUpdate}
                    ></omfx-button>
                </v-card-text>
            </div>
        );
    }
});
