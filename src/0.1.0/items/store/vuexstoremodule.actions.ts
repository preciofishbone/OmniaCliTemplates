import { Action, GlobalState } from "@omnia/fx/store"
import { $outputname$, $outputname$State } from "./$outputname$.store";

/**
 * Actions
 */
export class SampleAction extends Action<any>{
    namespace = $outputname$.namespace;
    handler = $outputname$.actions.sampleAction;
}

/**
 * Action creators
 */
export const $outputname$Actions = {
    get SendMessage(){
        return new SampleAction();
    } 
}

