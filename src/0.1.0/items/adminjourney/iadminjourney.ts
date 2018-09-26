import { TsxAllowUnknowProperties } from '@omnia/fx/ux'

/*@WebComponentInterface("$element$")*/
export interface I$outputname$ {

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