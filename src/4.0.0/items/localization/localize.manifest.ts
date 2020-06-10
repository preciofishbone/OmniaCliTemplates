import { Composer } from '@omnia/tooling/composers';
import { $outputname$ } from "./localize";

Composer.registerManifest("$guid1$")
    .registerLocalization()
    .namespace($outputname$.namespace)
    .add<$outputname$.locInterface>({
        Labels: {
            Label1: "Label 1",
            Label2: "Label 2"
        },
        Features: {
            Feature1: "Feature 1",
            Feature2: "Feature 2"
        }
    });
