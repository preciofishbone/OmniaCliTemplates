﻿import { Console } from '@omnia/fx';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';

export interface $outputname$Props {
    subtext: string;
}

export interface $outputname$Events {
    // all event members must be prefixed by 'on'
    // but the name when emitting the event will be without 'on'
    // example in the class @Emit('ok') and @Emit('error')
    onOk: void;
    onError: ErrorDetails;
}

export interface ErrorDetails {
    code: number;
    detail: string
}

export interface $outputname$ScopedSlots {
    default: { text: string };
}

@Component
export default class $outputname$ extends tsx.Component<
$outputname$Props,
$outputname$Events,
$outputname$ScopedSlots
> {

    @Prop() public subtext: string;

    //This will emit the onOk event to parent listeners
    @Emit('ok')
    onOkClicked() { }

    //This will emit the onError event to parent listeners
    //and pass the provided parameter
    @Emit('error')
    onErrorClicked(details: ErrorDetails) {
        //Add more logic here
    }


    public mounted() { }

    public render(h) {
        return <div>
            <button type="button" onClick={() => { this.onOkClicked() }} >Ok</button>
            <button type="button" onClick={() => { this.onErrorClicked({ code: 224, detail: 'Someone clicked error' }) }} >Error</button>
        </div>;
    }
}