import { Guid } from "@omnia/fx-models";
import { StyleFlow, defineVueComponent, useBlockSettingsReader } from "@omnia/fx/ux";
import $outputname$Styles from "./$outputname$.css";
import { $outputname$BlockSettings } from "./$outputname$Settings";


export default defineVueComponent({
    setup(props) {
        const settings = useBlockSettingsReader<$outputname$BlockSettings>({
            defaultValue: { title: "my block title" },
            editElementManifestId: new Guid("$guid2$")
        });

        const $outputname$Classes = StyleFlow.use($outputname$Styles);

        return () => (
            <o-text class={$outputname$Classes.container}>
                {settings.title}
            </o-text>
        );
    }
});

