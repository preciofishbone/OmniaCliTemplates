import { Mutation, GlobalState } from "@omnia/fx/store"
import { $outputname$, $outputname$State } from "./$outputname$.store";
import {ActionContext} from "vuex";

/**
 * Mutations
 */
export class SampleMutation extends Mutation<any>{
    namespace = $outputname$.namespace;
    handler = $outputname$.mutations.sampleMutation;
}

/**
 * Mutation creators
 */
export const $outputname$Mutations = {
    get sampleMutation(){
         return new SampleMutation();
    }, 
}

