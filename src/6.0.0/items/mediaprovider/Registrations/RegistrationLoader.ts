import { extendApi } from "@omnia/fx";
import { $outputname$Registration } from "./$outputname$Registration";

extendApi(api => api.fx.ux.mediaPicker.registration,
    registerApi => {
        return new Promise<void>((resolve, reject) => {
            registerApi.registerProviders([                
                new $outputname$Registration()  
            ])
            resolve();
        })
    }
    )
