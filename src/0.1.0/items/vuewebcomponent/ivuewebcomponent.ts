
export interface $outputname$Model {
    title: string;
}

export interface I$outputname$Properties {
    required?: boolean;
}

/*@WebComponentInterface("$tagname$")*/
export interface I$outputname$ extends I$outputname$Properties {

    // allow unknown properties
    [name: string]: any;

    /*@DomProperty*/
    model: $outputname$Model;
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            /*@WebComponent*/
            "$tagname$": I$outputname$
        }
    }
}