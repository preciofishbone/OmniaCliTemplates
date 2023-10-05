import { Composer } from "@omnia/tooling-composers";
import { Guid } from '@omnia/fx/models';


Composer
    .registerManifest(new Guid("$guid4$"), "pagerollup.api.registration")
    .registerResources({
        resourcePaths: [
            "./Registration.js",
        ]
    })
    .extendApi(api => api.wcm.pageRollup.registration)


