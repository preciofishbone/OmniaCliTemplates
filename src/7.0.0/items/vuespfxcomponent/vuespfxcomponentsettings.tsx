import { StyleFlow, useBlockSettingsWriter } from '@omnia/fx/ux';
import { $outputname$SettingsStyles } from './$outputname$Settings.css';
import { $outputname$Settings } from './I$outputname$Settings';
import { IBlockSettingsWriter } from '@omnia/fx-models';

export default defineVueWebComponent({
    setup(props) {
        const settings = useBlockSettingsWriter<$outputname$Settings>({
            defaultValue: { title: 'my block title' }
        });

        return () => (
            <v-text-field
                single-line
                box
                label="Title"
                v-model={this.settings.title}>
            </v-text-field>
        )
    }
});
