import { TsxAllowUnknowProperties } from '@omnia/fx/ux'

export interface $outputname$Data {
    title: string;
}

/*@WebComponentInterface("$tagname$")*/
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
            "$tagname$": TsxAllowUnknowProperties<I$outputname$>
        }
    }
}