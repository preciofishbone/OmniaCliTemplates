import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';
import { FontAwesomeIcon } from '@omnia/fx-models';


Composer.registerManifest(new Guid("$guid1$"), "$outputname$")
.registerWebComponent({
    elementName: "$element$",
    entryPoint: "./$outputname$.jsx"
})
.withDefinition({
    title: "$outputname$", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
    description: "$outputname$", // You can use localization, i.e., $Localize:Namespace.Something.Description;
    icon: new FontAwesomeIcon("far fa-smile-beam")
})

/*Registration of the provider to mediapicker*/
Composer.registerManifest(new Guid("$guid2$"), "$outputname$.registration")
.registerResources({
    resourcePaths: ["./registrations/RegistrationLoader.js"]
})
.extendApi(api => api.fx.ux.mediaPicker.registration);
