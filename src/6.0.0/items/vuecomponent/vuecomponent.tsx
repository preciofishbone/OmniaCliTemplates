import { Console } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import { VueComponentBase } from '@omnia/fx/ux';

export interface $outputname$Props {

}

export interface $outputname$Events {
    // all event members must be prefixed by 'on'
    // but the name when emitting the event will be without 'on'
    // example when using trigger event @Emit('ok')
    //onOk: void;
}


export interface $outputname$ScopedSlots {
    
}

@Component
export default class $outputname$ extends VueComponentBase<
$outputname$Props,
$outputname$Events,
$outputname$ScopedSlots
> {

    public mounted() { }

    public render(h) {
        return <div>
            
        </div>;
    }
}