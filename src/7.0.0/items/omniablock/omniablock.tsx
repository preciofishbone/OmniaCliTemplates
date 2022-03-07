import { StyleFlow, defineVueWebComponent, useBlockSettingsReader } from '@omnia/fx/ux';
import { $outputname$Styles } from './$outputname$.css';
import { $outputname$BlockSettings } from './$outputname$Settings';


export default defineVueWebComponent({
    setup(props) {
        const settings = useBlockSettingsReader<$outputname$BlockSettings>({
            defaultValue: { title: 'my block title' },
            editElement: "$element$-settings"
        });

        const $outputname$Classes = StyleFlow.use($outputname$Styles);

        return () => (
            <div class={this.$outputname$Classes.container}>
                {this.settings.title}
            </div>
        )
    }
});

