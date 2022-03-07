import { PropType } from '@vue/composition-api';
import { StyleFlow, defineVueWebComponent } from '@omnia/fx/ux';
import { $outputname$Styles } from './$outputname$.css';

interface $outputname$Data {
    title: string;
}

export default defineVueWebComponent({
    props: {
        required: {
            type: Boolean,
            required: true
        },
        data: {
            type: Object as PropType<$outputname$Data>
        },
        styles: {
            type: Object as PropType<typeof $outputname$Styles>
        }
    },
    setup(props) {
        const $outputname$Classes = StyleFlow.use($outputname$Styles, props.styles);

        return () => (
            <div class={this.$outputname$Classes.container}>
                <div>{this.data.title}</div>
                {this.required ? <div>Im required</div> : null}
            </div>
        )
    }
});
