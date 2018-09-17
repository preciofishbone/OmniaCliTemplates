import { TsxAllowUnknowProperties } from '@omnia/fx/ux'

export interface $outputname$Data {
    title: string;
}

/*@WebComponentInterface("$element$")*/
export interface I$outputname$ {

    required: boolean;

    /*@DomProperty*/
    data?: $outputname$Data;
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            /*@WebComponent*/
            "$element$": TsxAllowUnknowProperties<I$outputname$>
        }
    }
}