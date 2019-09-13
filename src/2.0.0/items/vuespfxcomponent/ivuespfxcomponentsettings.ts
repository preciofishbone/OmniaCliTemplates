import { TsxAllowUnknowProperties } from '@omnia/fx/ux'

export interface $outputname$Settings {
    title: string;
}

/*@WebComponentInterface("$element$-settings")*/
export interface I$outputname$Settings {
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            /*@WebComponent*/
            "$element$-settings": TsxAllowUnknowProperties<I$outputname$Settings>
        }
    }
}