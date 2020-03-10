import { Store } from '@omnia/fx/store';
import { Injectable, Inject } from '@omnia/fx';
import { InstanceLifetimes } from '@omnia/fx-models';

@Injectable({
    onStartup: (storeType) => { Store.register(storeType, InstanceLifetimes.Scoped) }
})
export class $outputname$ extends Store
{
    private testState = this.state<string>("Inital value");
   
    constructor()
    {
        super({
            id: "$guid1$"
        });
    }

    onActivated()
    {
        //Called when the store gets created and ready to use
    }

    onDisposing()
    {
        //Called when the store is disposed, do some cleanup here
    }

    /**
    * Implementation of getters
    */
    getters = {
        globalSettings: () => {
            return this.testState;
        }
    }

    /**
     * Implementation of mutations
     */
    mutations = {
        update: (newState: string) => {
            this.testState.mutate(newState);
        }
    }
    /**
     * Implementation of actions
     */
    actions = {
        loadSomething: this.action(() => {
            return new Promise<null>((resolve, reject) => {
                //TODO: Do some promise based operations like fething from web api
                Promise.resolve("Updated value");
            });
        })
    }

}

