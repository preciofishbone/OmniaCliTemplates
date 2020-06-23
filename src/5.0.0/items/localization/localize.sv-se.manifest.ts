import { Composer } from '@omnia/tooling/composers';
import { LocaleNames } from '@omnia/fx-models';

Composer.registerManifest("$guid3$")
    .registerLocalization({ localeName: LocaleNames.SvSe })
    .namespace('')
    .add({
        "$outputname$": {
            "Labels": {
                "Label1": "Etikett 1",
                "Label2": "Etikett 2"
            },
            "Features": {
                "Feature1": "Funktion 1",
                "Feature2": "Funktion 2"
            }
        }
    });