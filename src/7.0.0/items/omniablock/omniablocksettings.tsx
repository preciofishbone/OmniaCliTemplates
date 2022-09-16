import { useBlockSettingsWriter, defineVueWebComponent } from "@omnia/fx/ux";

export interface $outputname$BlockSettings {
    title: string;
}

export default defineVueWebComponent({
    setup(props) {
        const settings = useBlockSettingsWriter<$outputname$BlockSettings>({
            defaultValue: { title: "my block title" }
        });

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

