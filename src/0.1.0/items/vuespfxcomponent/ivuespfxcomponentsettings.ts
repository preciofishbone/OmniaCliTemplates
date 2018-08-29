import { TsxAllowUnknowProperties } from '@omnia/fx/ux'

export interface $outputname$Settings {
    title: string;
}

/*@WebComponentInterface("$tagname$-settings")*/
export interface I$outputname$Settings {

    /*@DomProperty*/
    onClosed?: () => void;

    /*@DomProperty*/
    onChange?: (value) => void
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            /*@WebComponent*/
            "$tagname$-settings": TsxAllowUnknowProperties<I$outputname$Settings>
        }
    }
}