import { Composer } from '@omnia/tooling/composers';
import { Guid, FontAwesomeIcon } from "@omnia/fx/models";

Composer
    .registerManifest(new Guid("$guid1$"), "$outputname$")
    .registerWebComponent({
        elementName: "$element$",
        entryPoint: "./$outputname$.jsx"
    })
    .withDefinition({
        title: "$outputname$",
        description: "$outputname$",
        icon: new FontAwesomeIcon("fas fa-rocket")
    })
    .registerSpfxWebpart()

Composer
    .registerManifest(new Guid("$guid2$"), "$outputname$.settings")
    .registerWebComponent({
        elementName: "$element$-settings",
        entryPoint: "./$outputname$Settings.jsx",
        typings: ["./I$outputname$Settings.ts"]
    });
