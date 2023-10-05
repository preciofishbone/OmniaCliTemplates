import { MediaPickerProvider, GuidValue, MediaPickerEnums, IIcon, SvgIcon, MediaPickerVideo, MediaPickerPersistedImage, FontAwesomeIcon } from '@omnia/fx-models';

export class $outputname$Registration implements MediaPickerProvider {
    id: GuidValue;
    category: string;
    name: string;
    icon: IIcon;
    sortOrder?: number;
    selectableMediaTypes: MediaPickerEnums.OmniaMediaTypes[];
    providerComponentId: GuidValue;

    constructor() {
        this.id = "$guid3$";
        this.category = "image";
        this.name = "$outputname$";
        this.icon = new FontAwesomeIcon("fal fa-amp-guitar");
        this.providerComponentId = "$guid1$";
        this.selectableMediaTypes = [MediaPickerEnums.OmniaMediaTypes.Image];
        this.sortOrder = 41;
    }

    hasEditorForMedia = (media: MediaPickerVideo | MediaPickerPersistedImage): boolean => {
        return false;
    }
}




