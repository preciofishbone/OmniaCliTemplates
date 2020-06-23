using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Threading;
using Microsoft.Extensions.Logging;
using Omnia.Fx.NetCore.Worker;
using System;
using Omnia.Fx.Users;
using Omnia.Fx.Http.Preconfigured.HttpClients;
using Omnia.Fx.Http.Preconfigured.HttpClients.Generic;


namespace $namespace$
{
    internal class $outputname$ : LifetimeEventsHostedService
    {
        private ILogger<$outputname$> Logger { get; }
        private IServiceScopeFactory ServiceScopeFactory { get; }
        private Timer _timer;
        private int frequencyMinutes = 60; //Run every 60 minutes

        public $outputname$(
            IHostApplicationLifetime appLifetime,
            IServiceScopeFactory serviceScopeFactory,
            ILogger<$outputname$> logger) : base(appLifetime)
        {
            Logger = logger;
            ServiceScopeFactory = serviceScopeFactory;
        }

        //****************************************************************************************************
        //** TODO ********************************************************************************************
        //****************************************************************************************************

        // Cut the code below and add it inside hostbuilder.ConfigureServices in Program.cs

        serviceCollection.AddHostedService<$outputname$>();
            
        //****************************************************************************************************


        public override Task OnStarted()
        {
            try
            {
                _timer = new Timer(RunAsync, null, TimeSpan.Zero, TimeSpan.FromMinutes(frequencyMinutes));
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.Message, ex);
            }
            return Task.CompletedTask;
        }

        public override Task OnStopped()
        {
            return Task.CompletedTask;
        }

        public override Task OnStopping()
        {
            _timer.Dispose();
            return Task.CompletedTask;
        }

        private async void RunAsync(object state)
        {
            try
            {
                using (var scope = ServiceScopeFactory.CreateScope())
                {
                    //You can 

                    //- retrieve any services with service provider
                    var userService = scope.ServiceProvider.GetRequiredService<IUserService>();

                    //- call graph api with graph service
                    var graphService = scope.ServiceProvider.GetRequiredService<IConfiguredHttpClient<Office365GraphServiceApi>>();

                    //- using CSOM to interact with SharePoint (please ensure you have installed the Omnia.Fx.NetCore.SharePoint nuget in worker)
                    //var spClientContextProvider = scope.ServiceProvider.GetRequiredService<ISharePointClientContextProvider>();
                }
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.Message, ex);
            }
        }
    }
}