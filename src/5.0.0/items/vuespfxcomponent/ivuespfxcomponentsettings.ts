import { TsxAllowUnknowProperties } from '@omnia/fx/ux'

export interface $outputname$Settings {
    title: string;
}


export interface I$outputname$Settings {
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            "$element$-settings": TsxAllowUnknowProperties<I$outputname$Settings>
        }
    }
}