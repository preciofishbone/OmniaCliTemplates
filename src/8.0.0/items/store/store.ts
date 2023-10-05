import { defineStore } from "@omnia/fx/stores";
import { Future } from "@omnia/fx-models";

export const use$outputname$ = defineStore("use$outputname$", ({ defineState, defineAction }) => {
    
    const { state, events, mutate } = defineState({
       title: "Omnia Fx"
    });

    const actions = defineAction({
        loadSomething: async () => {
            mutate.title("I love Omnia Fx");
            await Future.resolve("something");
        }
    });

    const get = {
        title: () => state.title
    };

    return {
        state,
        events,
        actions,
        get
    };
});