import { Composer } from '@omnia/tooling/composers';
import { Guid, OmniaWebComponentManifests, OmniaService } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("$guid4$"), "$outputname$.registration")
    .registerResources({ resourcePaths: ["./AdminRegistration.js"] })
    .withLoadRules()
    .loadIfManifestLoaded({ omniaServiceId: OmniaService.Id.toString(), resourceId: OmniaWebComponentManifests.Admin.toString() })