import { TsxAllowUnknowProperties } from '@omnia/fx/ux';
import { $outputname$Styles } from './$outputname$.css';

export interface $outputname$Data {
    title: string;
}

/*@WebComponentInterface("$element$")*/
export interface I$outputname$ {

    required: boolean;

    data?: $outputname$Data;

    styles?: typeof $outputname$Styles;
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