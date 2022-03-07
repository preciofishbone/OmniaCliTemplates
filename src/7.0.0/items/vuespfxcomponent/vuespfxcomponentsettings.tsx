import { defineVueWebComponent, useBlockSettingsWriter } from '@omnia/fx/ux';
import { $outputname$Settings } from './I$outputname$Settings';

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
                v-model={settings.title}>
            </v-text-field>
        )
    }
});
