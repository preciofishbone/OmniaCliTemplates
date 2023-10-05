using Microsoft.Extensions.Options;
using Omnia.Fx.MediaPicker.StorageProvider;
using Omnia.Fx.Models.AppSettings;
using Omnia.Fx.Models.MediaPicker;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace $namespace$
{

    public class $outputname$ : IMediaPickerStorageProvider
    {
        //***************************************************************************
        // Put a Persistent Disk Id of your web service here
        // To find more information about Persistent Disk, visit this tutorial: https://github.com/preciofishbone/OmniaFx/tree/main/docs/tutorials/omnia-learn/persistent-disk#persistent-disk
        //***************************************************************************
        private readonly Guid PersistentStorageId = new Guid(Persistent-Disk-Id);

        //***************************************************************************
        // Put a Root Folder Name that will be used for this media storage in the Persistent Disk
        // To find more information about this, visit this tutorial: https://github.com/preciofishbone/OmniaFx/tree/main/docs/tutorials/omnia-learn/persistent-disk#persistent-disk
        //***************************************************************************
        private readonly string RootFolder = Root-Folder-Name;


        private IOptionsMonitor<OmniaAppSettings> OmniaAppSettings { get; }

        public $outputname$(IOptionsMonitor<OmniaAppSettings> omniaAppSettings)
        {
            OmniaAppSettings = omniaAppSettings;

            //***************************************************************************
            // TODO - Cut the code below and add it inside .AddOmniaFxWebApp in Program.cs
            //***************************************************************************
            
             options.AddMediaPickerStorageProvider<$outputname$Context, $outputname$>();
        }

        public async ValueTask<(IList<MediaPickerImageMetadata> MetaData, string StorageFolderPath)> GetPersistantStorageInformationAsync<TProviderContext>(TProviderContext providerContext) where TProviderContext : MediaPickerStorageProviderContext
        {
            var storagePath = GetPersistentDiskResource(PersistentStorageId).Path;
            var folderPath = GetImageFolderPath(providerContext);

            return (GetImageMetaData(providerContext), Path.Combine(storagePath, folderPath));
        }

        public async ValueTask<bool> CheckUserUpdatePermissionAsync(MediaPickerPersistedImage imageToUpdate)
        {
            //***************************************************************************
            //Here you can get the context from image metadata to do authorization 
            //***************************************************************************

            //For example getting the profile id from metadata
            var profileIdMetaData = imageToUpdate.Metadata.Where(m => m.Name == nameof($outputname$Context.BusinessProfileId)).FirstOrDefault();
            if (profileIdMetaData.IsNotNull())
            {
                var profileId = profileIdMetaData.Value; 
                //to do...
            }

            //***************************************************************************
            //or just always return true if you dont care about the authorization
            //***************************************************************************
            return true;
        }

        public async ValueTask<bool> CheckUserReadPermissionAsync(MediaPickerPersistedImage imageToRead)
        {
            return true;
        }

        public async ValueTask<bool> CheckUserWritePermissionAsync<TProviderContext>(TProviderContext providerContext) where TProviderContext : MediaPickerStorageProviderContext
        {
            return true;
        }

        private PersistentDiskResource GetPersistentDiskResource(Guid resourceId)
        {
            if (!OmniaAppSettings.CurrentValue.PersistentDiskResources.ContainsKey(resourceId.ToString()))
            {
                //****************************************************************************************************
                //NOTE: Here you are missing the path definition of this persistent disk in your appsettings.local.json
                //To find more information about Persistent Disk, visit this tutorial: https://github.com/preciofishbone/OmniaFx/tree/main/docs/tutorials/omnia-learn/persistent-disk#persistent-disk
                //****************************************************************************************************

                throw new ArgumentException($"Missing persistent disk resource for resource id {resourceId}");
            }

            return OmniaAppSettings.CurrentValue.PersistentDiskResources[resourceId.ToString()];
        }

        private string GetImageFolderPath(MediaPickerStorageProviderContext providerContext)
        {
            string folderPath = string.Empty; 

            //***************************************************************************
            //You can allocate images to different folders based on their context
            //***************************************************************************
            
            var currentProviderContext = providerContext as $outputname$Context;
            
            if (currentProviderContext.BusinessProfileId.IsNotNull())
            {
                //combine subpath with RootFolder
                folderPath = Path.Combine(RootFolder, currentProviderContext.BusinessProfileId.ToString(), currentProviderContext.MyItemId.ToString());
            }
            else
            {
                //combine subpath with RootFolder
                folderPath = Path.Combine(RootFolder, "Tenant", currentProviderContext.MyItemId.ToString());
            }

            return folderPath;

            //***************************************************************************
            //OR you can just put all images in the same root folder
            //Each images will be saved with an unique integer as file name so don't worries
            //
            //return RootFolder;
            //***************************************************************************
        }

        /// <summary>
        /// Generate a list of image metadata based on its context
        /// </summary>
        /// <param name="providerContext"></param>
        /// <returns></returns>
        private List<MediaPickerImageMetadata> GetImageMetaData(MediaPickerStorageProviderContext providerContext)
        {
            var result = new List<MediaPickerImageMetadata>();

            var currentProviderContext = providerContext as $outputname$Context;

            result.Add(new MediaPickerImageMetadata { Name = nameof($outputname$Context.MyItemId), Value = currentProviderContext.MyItemId.ToString() });

            if (currentProviderContext.BusinessProfileId.IsNotNull())
            {
                result.Add(new MediaPickerImageMetadata { Name = nameof($outputname$Context.BusinessProfileId), Value = currentProviderContext.BusinessProfileId.ToString() });
            }

            return result;
        }
    }
}
