import { useBlockSettingsWriter, defineVueWebComponent, StyleFlow } from "@omnia/fx/ux";
import $outputname$SettingsStyles from "./$outputname$Settings.css";

export interface $outputname$BlockSettings {
    title: string;
}

export default defineVueWebComponent({
    setup(props) {
        const settings = useBlockSettingsWriter<$outputname$BlockSettings>({
            defaultValue: { title: "my block title" }
        });
        const $outputname$Classes = StyleFlow.use($outputname$SettingsStyles);

        return () => (
            <v-card flat>
                <v-card-text>
                    <v-text-field
                        filled
                        v-model={settings.title}
                        label='Title'></v-text-field>
                </v-card-text>
            </v-card>
        );
    }
});

