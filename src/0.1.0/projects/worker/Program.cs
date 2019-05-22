using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Omnia.Fx.HostConfiguration;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.Models.AppSettings;
using System;
using System.IO;
using System.Threading.Tasks;

namespace $namespace$
{
    public class Program
    {
        public static ILogger<Program> Logger = null;
        public static async Task Main(string[] args)
        {
               var logFactory = new LoggerFactory()
                    .AddConsole(LogLevel.Debug)
                    .AddDebug();

            Logger = logFactory.CreateLogger<Program>();
            IHost host = null;

            try
            {
                host = new HostBuilder()
                    .UseOmniaHostConfiguration((omniaConfig) =>
                    {
                        omniaConfig.AddAppSettingsJsonFile("appsettings.json", Directory.GetCurrentDirectory());
                        omniaConfig.AddAppSettingsJsonFile("appsettings.local.json", Directory.GetCurrentDirectory());

                        omniaConfig.AddOmniaFxNetCore((configBuilder) =>
                        {
                           //Add your 
                        });

                        omniaConfig.Configuration((configBuilder) =>
                            {
                                configBuilder.AddCommandLine(args);

                                omniaConfig.ConfigureServices((serviceCollection) =>
                                {
                                    var configuration = configBuilder.Build();

                                    serviceCollection.AddAsOption<OmniaAppSettings>(configuration);
                                    serviceCollection.AddLogging();
                                    serviceCollection.AddHostedService<ExampleWorker>();
                                    
                                });
                            });
                    })
                   .ConfigureLogging((hostContext, cfgLogging) =>
                   {
                       cfgLogging.UseOmniaLogging();
                   })
                   .UseConsoleLifetime()
                   .Build();
            }
            catch (Exception ex)
            {
                Logger.LogError($"Configuration exception: {ex.Message}, stacktrace: {ex.StackTrace}");
                throw ex;
            }

            try
            {
                await host.RunOmniaAsync();
            }
            catch (Exception ex)
            {
                Logger.LogError($"Runtime exception: {ex.Message}, stacktrace: {ex.StackTrace}");
                throw ex;
            }
        }
    }
}
