using Microsoft.Extensions.Logging;
using Omnia.Fx.Apps;
using Omnia.Fx.Http;
using Omnia.Fx.NetCore.Features.Attributes;
using Omnia.Fx.NetCore.Features.FeatureProviders;
using Omnia.Fx.Utilities;
using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Omnia.Fx.SharePoint.Client;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.SharePoint.Client;
using System.Linq;
using Omnia.Fx.SharePoint.Services.Contexts;

namespace Omnia.Fx.Examples.BasicSharePointFeature.Features
{
    //Same id as defined in the manifest
    [OmniaFeature("$guid1$")]
    internal class $outputname$ : BaseAppFeatureProvider
    {
        ILogger<$outputname$> Logger { get; }

        ISharePointClientContextProvider SharePointClientContextProvider { get; }

        public $outputname$(
            ILogger<$outputname$> logger,
            IAppService appService,
            ISharePointClientContextProvider sharePointContext
            ) : base(appService)
        {
            Logger = logger;
            SharePointClientContextProvider = sharePointContext;

            //****************************************************************************************************
            //** TODO ********************************************************************************************
            //****************************************************************************************************
            
            //** Step 1 ******************************************************************************************
            // In your .csproj file ensure you have the Omnia.Fx.NetCore.SharePoint dependency

             <PackageReference Include="Omnia.Fx.NetCore.SharePoint" Version="Same as Omnia.Fx.NetCore.Worker" />

            //** Step 2 ******************************************************************************************
            // Cut the code below and add it inside omniaConfig.AddOmniaFxNetCore in Program.cs
            // NOTE! If you already have options.AddFeatureHandlers then only add the .AddFeatureProvider line
            
             options.AddFeatureHandlers((featureProviderOptions) =>
             {
                 featureProviderOptions.AddFeatureProvider<$outputname$>();
             });
            
            //** Step 3 ******************************************************************************************
            //Cut the code below and make sure that its added after the .AddOmniaFxNetCore method in Program.cs
             
             .AddOmniaFxNetCoreSharePoint();
            
            //****************************************************************************************************
        }

        protected override async Task ActivateAsync()
        {
           await ActivateOrUpdate();
        }

        protected override Task DeactivateAsync(string fromVersion)
        {
            return Task.CompletedTask;
        }

        protected override async Task UpgradeAsync(string fromVersion)
        {
            await ActivateOrUpdate();
        }

        private async Task ActivateOrUpdate()
        {
            var spUrl = AppInstance.Properties.ContextParams.EnsureContextParamStringValue(Omnia.Fx.SharePoint.Constants.Parameters.SPUrl);
            var ctx = SharePointClientContextProvider.CreateClientContext(spUrl);

            //TODO: Remove this when you have a async operation
            await Task.CompletedTask;
        }
    }
}
