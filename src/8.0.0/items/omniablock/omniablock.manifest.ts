import { Composer } from "@omnia/tooling/composers";
import { ClientManifestTargetTypes, Guid } from "@omnia/fx/models";
import { FontAwesomeIcon } from "@omnia/fx-models";

Composer
    .registerManifest(new Guid("$guid1$"), "$outputname$")
    .registerElement({
        elementName: "$element$",
        entryPoint: "./$outputname$.tsx"
    })
    .withDefinition({
        title: "$outputname$", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
        description: "$outputname$", // You can use localization, i.e., $Localize:Namespace.Something.Description;
        icon: new FontAwesomeIcon("far fa-smile-beam")
    })
    .registerOmniaBlock({
        category: "$outputname$", // You can use localization, i.e., $Localize:Namespace.Something.Category;

        //which layout provider can use this block. 
        //layoutDependencyProviders: ["wcm"] //i.e. only WCM layout can use this block 
    })
    //Define your target, i.e., where the block should be available
    .withTarget(ClientManifestTargetTypes.public);

Composer
    .registerManifest(new Guid("$guid2$"), "$outputname$.settings")
    .registerElement({
        elementName: "$element$-settings",
        entryPoint: "./$outputname$Settings.tsx"
    })
    //Define your target, i.e., where the block should be available
    .withTarget(ClientManifestTargetTypes.public);