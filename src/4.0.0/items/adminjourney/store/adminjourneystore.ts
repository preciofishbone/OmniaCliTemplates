import { Store } from '@omnia/fx/store';
import { Injectable, Utils } from '@omnia/fx';
import { InstanceLifetimes } from '@omnia/fx-models';
import { Item } from '../models';

@Injectable({
    onStartup: (storeType) => { Store.register(storeType, InstanceLifetimes.Singelton) }
})
export class $outputname$Store extends Store {

    private editingItem = this.state<Item>(null);

    private items = this.state<Array<Item>>([
        { id: Utils.generateGuid(), title: 'Item A' },
        { id: Utils.generateGuid(), title: 'Item B' },
        { id: Utils.generateGuid(), title: 'Item C' },
        { id: Utils.generateGuid(), title: 'Item D' }
    ]);

    constructor() {
        super({
            id: "$guid3$"
        });
    }

    getters = {
        items: () => this.items.state,
        editingItem: () => this.editingItem.state
    }

    actions = {
        addOrUpdate: this.action(() => {
            return new Promise<null>((resolve, reject) => {
                let editingItem = Utils.clone(this.editingItem.state);

                this.items.mutate(state => {
                    let items = state.state;
                    let index = items.findIndex(item => item.id === editingItem.id);
                    if (index >= 0) {
                        items[index] = editingItem;
                    }
                    else {
                        items.push(editingItem);
                    }
                    state.state = [...items];
                });

                resolve(null);
            })
        })
    }

    mutations = {
        setEditState: this.mutation((item: Item) => {
            this.editingItem.mutate(Utils.clone(item));
        }),
        setCreateState: this.mutation(() => {
            this.editingItem.mutate({ id: Utils.generateGuid(), title: '' });
        })
    }

    protected onActivated() {

    }

    protected onDisposing() {

    }
}
