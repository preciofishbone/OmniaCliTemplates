import {StoreModule,GlobalState, GlobalStore} from "@omnia/fx/store"
import {ActionContext} from "vuex";
import {$outputname$Mutations} from "./$outputname$.mutations";

/**
 * Message Store state
 */
export interface $outputname$State{

}

/**
 * $outputname$ Module Definition
 */
export class $outputname$Definition implements StoreModule<$outputname$State,GlobalState>{

    namespaced = true ;        
    namespace = "store.module.$outputname$";    
    /**
     * The state of the store
     */
    state:$outputname$State = {

    };    
    
    /**
     * Implementation of getters
     */
    getters = {
        
    }

    /**
     * Implementation of mutations
     */
    mutations = {
        sampleMutation : (state:$outputname$State,payload:any) =>{
        }
    }

    /**
     * Implementation of actions
     */
    actions = {
        sampleAction : (store:ActionContext<$outputname$State,GlobalState>,payload:any) =>{
        }
    }    
}

//Registration of the $outputname$ module in the Global Store
export const $outputname$ = new $outputname$Definition();
GlobalStore.registerModule($outputname$);

