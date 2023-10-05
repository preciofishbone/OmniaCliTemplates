using Newtonsoft.Json;
using Omnia.Fx.Models.MediaPicker;
using System;


namespace $namespace$
{

    //***************************************************************************
    // To upload media to this storage from server-side
    // Create a $outputname$Context object and use it within Omnia.Fx.MediaPicker.IMediaPickerService
    // e.g. mediaPickerService.AddNewImageAsync(...., providerContext: here )
    //***************************************************************************

    public class $outputname$Context : MediaPickerStorageProviderContext
    {
        public override Guid OmniaServiceId { get; protected set; } = new Guid(Your-web-service-id);
        public override Guid StorageProviderContextId { get; protected set; } = new Guid("$guid1$");



        //***************************************************************************
        // This is just a test property for media context that can be used to allocate images or authorization
        // Remove or Update this property based on your needs
        //***************************************************************************
        [JsonProperty]
        public int MyItemId { get; private set; }

        //***************************************************************************
        // This is a test property for media context that can be used to allocate images or authorization
        // // Remove or Update this property based on your needs
        //***************************************************************************
        [JsonProperty]
        public Guid? BusinessProfileId { get; private set; } 

        public $outputname$Context()
        {

        }

        public $outputname$Context(int myItemId, Guid? businessProfileId)
        {
            this.MyItemId = myItemId;
            this.BusinessProfileId = businessProfileId;
        }
    }
}
