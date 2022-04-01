import { Guid } from '@omnia/fx-models';
import { StyleFlow, defineVueWebComponent, useBlockSettingsReader } from '@omnia/fx/ux';
import { $outputname$Styles } from './$outputname$.css';
import { $outputname$BlockSettings } from './$outputname$Settings';


export default defineVueWebComponent({
    setup(props) {
        const settings = useBlockSettingsReader<$outputname$BlockSettings>({
            defaultValue: { title: 'my block title' },
            editElementManifestId: new Guid("$guid2$")
        });

        const $outputname$Classes = StyleFlow.use($outputname$Styles);

        return () => (
            <div class={$outputname$Classes.container}>
                {settings.title}
            </div>
        )
    }
});

