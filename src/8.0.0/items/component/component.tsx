import { Func } from "@omnia/fx-models";
import { defineVue, defineVueComponent, useIcons, SetupComponentContext, DefineVModel, DefineProp, DefineSlot, DefineEmit } from "@omnia/fx/ux";
import { VNodeChild, reactive } from "vue";

export default defineVueComponent(
    ({ props, slots, emit, models }: SetupComponentContext<
        DefineVModel<"", number> &
        DefineProp<"title", string> &
        DefineSlot<"icon", Func<[VNodeChild]>> &
        DefineEmit<"click:someThing", (value: string) => true>
    >) => {

        //Create a reactive local state
        const state = reactive({
            description: "This is a reactive description"
        });

        const icons = useIcons();

        function updateModel() {
            //This will set the model value to 1 and emit the event 
            //to the parent component that the value has changed
            models.modelValue = 1;
        }

        function emitCustomEvent() {
            //This will emit the custom event to the parent component with the value
            emit("click:someThing", "Emitting click something");
        }

        return () => (
            <o-panel onClick={emitCustomEvent} direction="row">
                <o-text typography="title" size="xl">{props.title}</o-text>
                {
                    slots.icon ?
                        slots.icon() :
                        <o-icon class="ml-2 fa-bounce" size="x-large" duotone icon={icons.faIcon("fal fa-fire")} />
                }
            </o-panel>
        );
    }
);