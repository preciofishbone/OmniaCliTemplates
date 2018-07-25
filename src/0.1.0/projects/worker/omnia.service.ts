import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";

Composer
    .registerManifest("$serviceid$", "$namespace$")
    .registerService({ description: "Description of $namespace$" })
    .AsWorker();
    
   