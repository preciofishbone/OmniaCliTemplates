import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";

Composer
    .registerManifest("cfbb6092-29d8-47fa-9866-4f755c04720d", "Omnia Cloud Web Auth")
    .registerService({ description: "Omnia Platform" })
    .AsWebApp()
   