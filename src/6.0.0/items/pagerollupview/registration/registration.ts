import { Guid } from '@omnia/fx/models';
import { extendApi } from "@omnia/fx";


extendApi(api => api.wcm.pageRollup.registration,
    registerApi => {
        registerApi.registerViews([
            {
                id: new Guid("$guid3$"),
                title: '$outputname$',
                settingsComponentManifestId: new Guid("$guid1$"),
                componentManifestId: new Guid("$guid2$"),
                supportClassicPaging: true,
                supportScrollPaging: true
            }
        ])
    })
