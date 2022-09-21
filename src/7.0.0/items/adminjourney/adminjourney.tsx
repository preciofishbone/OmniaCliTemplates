import { defineVueWebComponent, StyleFlow } from "@omnia/fx/ux";
import { Blade, BladeSizes, JourneyInstance } from "@omnia/fx-models";
import $outputname$Styles from "./$outputname$.css";
import HomeBlade from "./blades/HomeBlade";
import EditBlade from "./blades/EditBlade";
import { $outputname$Destinations, $outputname$BladeIds } from "./$outputname$Constants";

export default defineVueWebComponent({
    props: {
    },
    setup(props) {
        const $outputname$Classes = StyleFlow.use($outputname$Styles);

        let journey: JourneyInstance;
        const gotInstance = (instance: JourneyInstance) => {
            journey = instance;
            journey.travelTo($outputname$Destinations.home);
        };

        const getHomeBlade = () => {
            return {
                id: $outputname$BladeIds.home,
                size: BladeSizes.medium,
                content: () => <HomeBlade></HomeBlade>
            } as Blade;
        };

        const getEditBlade = () => {
            return {
                id: $outputname$BladeIds.edit,
                size: BladeSizes.medium,
                content: () => <EditBlade></EditBlade>
            } as Blade;
        };

        return () => (
            <omfx-journey
                class={$outputname$Classes.container}
                onInstanceCreated={gotInstance}
                blades={[
                    getHomeBlade(),
                    getEditBlade()
                ]}>
            </omfx-journey>
        );
    }
});

