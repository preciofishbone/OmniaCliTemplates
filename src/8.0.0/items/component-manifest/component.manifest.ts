import { Composer } from "@omnia/tooling/composers";
import { ClientManifestTargetTypes, Guid } from "@omnia/fx/models";

Composer
    .registerManifest(new Guid("$guid1$"), "$outputname$")
    .registerElement({
        elementName: "$element$",
        entryPoint: "./$outputname$.tsx"
    })
    //Define the target if intended use is for public/editor/admin/docs
    .withTarget(ClientManifestTargetTypes.public);