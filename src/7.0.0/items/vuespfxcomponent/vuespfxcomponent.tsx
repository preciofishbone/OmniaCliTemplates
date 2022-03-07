import { StyleFlow, defineVueWebComponent, useBlockSettingsReader } from '@omnia/fx/ux';
import { $outputname$Settings } from './I$outputname$Settings';
import { $outputname$Styles } from './$outputname$.css';


export default defineVueWebComponent({
    setup(props) {
        const settings = useBlockSettingsReader<$outputname$Settings>({
            defaultValue: { title: 'my block title' },
            editElement: "$element$-settings"
        });

        const $outputname$Classes = StyleFlow.use($outputname$Styles);

        return () => (
            <div class={$outputname$Classes.container}>
                <h1>My Setting: {settings.title}</h1>
            </div>
        )
    }
});
