import { StyleFlow, useBlockSettingsWriter } from '@omnia/fx/ux';
import { $outputname$SettingsStyles } from './$outputname$Settings.css';
import { IBlockSettingsWriter } from '@omnia/fx-models';


export interface $outputname$BlockSettings {
    title: string;
}

export default defineVueWebComponent({
    setup(props) {
        const settings = useBlockSettingsWriter<$outputname$BlockSettings>({
            defaultValue: { title: 'my block title' }
        });

        const $outputname$SettingsClasses = StyleFlow.use($outputname$SettingsStyles);

        return () => (
            <v-card flat>
                <v-card-text>
                    <v-text-field
                        filled
                        v-model={this.settings.title}
                        label='Title'></v-text-field>
                </v-card-text>
            </v-card>
        )
    }
});

