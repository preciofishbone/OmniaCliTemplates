import { Inject } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { OmniaTheming, VueComponentBase, ButtonPresets } from '@omnia/fx/ux';
import { $outputname$Destinations } from '../$outputname$Constants';
import { Item } from '../models';
import { $outputname$Store } from '../store/$outputname$Store';
import { JourneyInstance, FontAwesomeIcon } from '@omnia/fx-models';

export interface HomeBladeProps {
    journey: () => JourneyInstance;
}

export interface HomeBladeEvents {

}

export interface HomeBladeScopedSlots {

}

@Component
export default class HomeBlade extends VueComponentBase<
HomeBladeProps,
HomeBladeEvents,
HomeBladeScopedSlots
> {
    @Prop() journey: () => JourneyInstance;

    @Inject($outputname$Store) private store: $outputname$Store;
    @Inject(OmniaTheming) private omniaTheming: OmniaTheming;

    private headers: [
        { text: 'title' },
        { text: '' }
    ];

    public mounted() {

    }

    openEditBlade(item?: Item) {

        if (item) {
            this.store.mutations.setEditState.commit(item);
        }
        else {
            this.store.mutations.setCreateState.commit();
        }

        this.journey().travelTo($outputname$Destinations.edit);
    }



    public render(h) {
        let items = this.store.getters.items();

        return (
            <div>
                <v-app-bar flat dark={this.omniaTheming.promoted.header.dark} color={this.omniaTheming.promoted.header.background.base}>
                    <v-toolbar-title>Hello Omnia Fx Admin</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <omfx-button
                        dark={this.omniaTheming.promoted.header.dark}
                        onClick={() => { this.openEditBlade() }}
                        preset={ButtonPresets.icons.add} ></omfx-button>
                </v-app-bar>
                <v-divider></v-divider>

                <v-card-text>

                    <v-data-table
                        items-per-page={-1}
                        hide-default-footer
                        headers={this.headers}
                        items={items}
                        scopedSlots={{
                            item: (props: { item: Item }) => (
                                <tr>
                                    <td>
                                        {props.item.title}
                                    </td>
                                    <td class="text-right">
                                        <omfx-button
                                            onClick={() => { this.openEditBlade(props.item) }}
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
        )
    }
}