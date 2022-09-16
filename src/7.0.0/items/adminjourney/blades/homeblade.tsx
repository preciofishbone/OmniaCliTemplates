import { ButtonPresets, defineVueComponent, OmniaTheming, useJourney } from "@omnia/fx/ux";
import { useInject } from "@omnia/fx";
import { $outputname$Destinations } from "../$outputname$Constants";
import { Item } from "../models";
import { $outputname$Store } from "../store/$outputname$Store";
import { JourneyInstance, FontAwesomeIcon } from "@omnia/fx-models";

export default defineVueComponent({
    setup(props) {
        const omniaTheming = useInject(OmniaTheming);
        const store = useInject($outputname$Store);
        const journey = useJourney();

        const openEditBlade = (item?: Item) => {
            if (item) {
                store.mutations.setEditState.commit(item);
            }
            else {
                store.mutations.setCreateState.commit();
            }

            journey.travelTo($outputname$Destinations.edit);
        };

        const headers = [
            { text: "title" },
            { text: '' }
        ];

        return () => {
            const items = store.getters.items();

            return (
                <div>
                    <v-app-bar
                        flat
                        dark={omniaTheming.promoted.header.dark}
                        color={omniaTheming.promoted.header.background.base}>
                        <v-toolbar-title>Hello Omnia Fx Admin</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <omfx-button
                            dark={this.omniaTheming.promoted.header.dark}
                            onClick={() => openEditBlade()}
                            preset={ButtonPresets.icons.add} ></omfx-button>
                    </v-app-bar>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-data-table
                            items-per-page={-1}
                            hide-default-footer
                            headers={headers}
                            items={items}
                            scopedSlots={{
                                item: (props: { item: Item }) => (
                                    <tr>
                                        <td>
                                            {props.item.title}
                                        </td>
                                        <td class="text-right">
                                            <omfx-button
                                                onClick={() => openEditBlade(props.item)}
                                                icon={{
                                                    iconType: new FontAwesomeIcon('fas fa-pencil-alt')
                                                }}
                                                preset={ButtonPresets.base.smallIcon}></omfx-button>
                                        </td>
                                    </tr>
                                )
                            }}>
                        </v-data-table>
                    </v-card-text>
                </div>
            );
        };
    }
});
