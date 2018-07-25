using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Omnia.Fx.HostConfiguration;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.Models.AppSettings;
using System.IO;
using System.Threading.Tasks;

namespace $namespace$
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = new HostBuilder()
                .UseOmniaHostConfiguration((omniaConfig) => {
                    omniaConfig.AddAppSettingsJsonFile("appsettings.json", Directory.GetCurrentDirectory());
                    omniaConfig.AddAppSettingsJsonFile("appsettings.local.json", Directory.GetCurrentDirectory());

                    omniaConfig.AddOmniaFxNetCore();

                    omniaConfig.Configuration((configBuilder) => {
                        configBuilder.AddCommandLine(args);

                        omniaConfig.ConfigureServices((serviceCollection) => {
                            var configuration = configBuilder.Build();
                            serviceCollection.AddAsOption<OmniaAppSettings>(configuration);

                            serviceCollection.AddLogging();
                            serviceCollection.AddHostedService<ExampleWorker>();

                        });
                    });
                })
               .ConfigureLogging((hostContext, configLogging) =>
               {
                   configLogging.AddConsole();
                   configLogging.AddDebug();
               })
               .UseConsoleLifetime()
               .Build();

            await host.RunAsync();
        }
    }
}
