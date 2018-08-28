import { Composer } from '@omnia/tooling/composers';
import { Guid, FontAwesomeIcon } from "@omnia/fx/models";

Composer
    .registerManifest(new Guid("$guid1$"), "$outputname$")
    .registerWebComponent({
        elementName: "$tagname$",
        entryPoint: "./$outputname$.jsx",
        typings: ["./I$outputname$.ts"]
    })
    .withDefinition({
        title: "$Localize:MyTest.Title;",
        description: "$Localize:MyTest.Title;",
        icon: new FontAwesomeIcon("fas fa-bell")
    })
    .registerSpfxWebpart()