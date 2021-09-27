import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("$guid4$"), "$outputname$.registration")
    .registerResources({ resourcePaths: ["./AdminRegistration.js"] })
    .extendApi(api => api.fx.ux.admin.registration.navigationNode);