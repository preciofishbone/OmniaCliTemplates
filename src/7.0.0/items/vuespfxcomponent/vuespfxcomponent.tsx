import { StyleFlow, defineVueWebComponent, useBlockSettingsReader } from "@omnia/fx/ux";
import { Guid } from "@omnia/fx-models";
import { $outputname$Settings } from "./I$outputname$Settings";
import { $outputname$Styles } from "./$outputname$.css";


export default defineVueWebComponent({
    setup(props) {
        const settings = useBlockSettingsReader<$outputname$Settings>({
            defaultValue: { title: "my block title" },
            editElementManifestId: new Guid("$guid2$")
        });

        const $outputname$Classes = StyleFlow.use($outputname$Styles);

        return () => (
            <div class={$outputname$Classes.container}>
                <h1>My Setting: {settings.title}</h1>
            </div>
        );
    }
});
