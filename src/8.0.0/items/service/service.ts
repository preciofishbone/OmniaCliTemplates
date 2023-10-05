import { Guid } from "@omnia/fx-models";
import { defineService } from "@omnia/fx/services";

export const use$outputname$ = defineService(({ useBring }) => {

    //TODO: Enter your Omnia Service id in the guid
    const bring = useBring(new Guid(""));

    async function getSomething() {

        const {success, error} = await bring.get<YourResult>("api/something").tryCatch();

        if(error){
            //Handle your error
        }

        return success.data;
    }

    return {
        getSomething
    };
});

export interface YourResult {
    title : string
}