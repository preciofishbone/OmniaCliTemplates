import { Composer } from "@omnia/tooling-composers";
import { WcmWebComponentManifests, WcmService } from '@omnia/wcm/models';
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("$guid4$"), "$outputname$.viewregistration")
    .registerResources({
        resourcePaths: ['./Registration.js']
    })
    .withLoadRules().loadIfManifestLoaded({
        omniaServiceId: WcmService.Id.toString(),
        resourceId: WcmWebComponentManifests.PageRollup.toString()
    })
    .or()
    .loadIfManifestLoaded({
        omniaServiceId: WcmService.Id.toString(),
        resourceId: WcmWebComponentManifests.PageRollupSettings.toString()
    })
