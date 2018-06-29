import { Composer } from '@omnia/tooling/composers';

Composer
    .registerManifest("$guid1$", "$outputname$")
    .registerWebComponent({
        elementName: "$tagname$",
        entryPoint: "./$outputname$.jsx",
        typings: "./I$outputname$.ts"
    });