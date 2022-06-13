import { PropType } from "@vue/composition-api";
import { StyleFlow, defineVueWebComponent, definePropObjectType } from "@omnia/fx/ux";
import { $outputname$Styles } from "./$outputname$.css";

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
            type: definePropObjectType<$outputname$Data>(),
            default: { title: "Hello from $outputname$!" }
        },
        styles: {
            type: definePropObjectType<typeof $outputname$Styles>()
        }
    },
    setup(props) {
        const $outputname$Classes = StyleFlow.use($outputname$Styles, props.styles);

        return () => (
            <div class={$outputname$Classes.container}>
                <div>{props.data.title}</div>
                {props.required ? <div>Im required</div> : null}
            </div>
        )
    }
});
