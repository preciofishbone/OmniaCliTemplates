import { Guid, GuidValue, MediaPickerStorageProviderContext } from "@omnia/fx-models";


//***************************************************************************
// TODO - Move this file somewhere under ./client folder
//***************************************************************************


//***************************************************************************
// To upload media to this storage from client-side
// Create a $outputname$Context object and put it in <omfx-media-picker providerContext={here} ... >
//***************************************************************************


export class $outputname$Context extends MediaPickerStorageProviderContext {
    readonly omniaServiceId: GuidValue = Your-web-service-id;
    readonly storageProviderContextId: GuidValue = new Guid("$guid1$");

    //***************************************************************************
    //This is just a test property for media context that can be used to allocate images or authorization
    //Remove or Update this property based on your needs
    //***************************************************************************
    
    businessProfileId?: GuidValue;

    //***************************************************************************
    //This is just a test property for media context that can be used to allocate images or authorization
    //Remove or Update this property based on your needs
    //***************************************************************************
    myItemId: number;

    constructor(myItemId: number, businessProfileId: GuidValue = null) {
        super();

        this.businessProfileId = businessProfileId;
        this.myItemId = myItemId;
    }
}