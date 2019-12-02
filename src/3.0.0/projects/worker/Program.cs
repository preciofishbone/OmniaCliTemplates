using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Omnia.Fx.HostConfiguration;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.Models.AppSettings;
using Omnia.Fx.NetCore.Worker.Hosting;
using System.IO;
using System.Threading.Tasks;

namespace $namespace$
{
    /// <summary>
    /// Program
    /// </summary>
    public class Program
    {
        /// <summary>
        /// Main entry point
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public static async Task Main(string[] args)
        {
                await new WorkerHost(args)
                    .ConfigureOmnia((omniaConfig, logging) =>
                    {
                        omniaConfig.AddAppSettingsJsonFile("appsettings.json", Directory.GetCurrentDirectory());
                        omniaConfig.AddAppSettingsJsonFile("appsettings.local.json", Directory.GetCurrentDirectory());

                        omniaConfig.AddOmniaFxNetCore();

                        omniaConfig.Configuration((configBuilder) =>
                        {
                            configBuilder.AddCommandLine(args);
                            omniaConfig.ConfigureServices((serviceCollection) =>
                            {
                                var configuration = configBuilder.Build();

                                serviceCollection.AddLogging();
                                serviceCollection.AddAsOption<OmniaAppSettings>(configuration);
                                serviceCollection.AddHostedService<ExampleWorker>();

                            });
                        });
                    })
                    .RunAsync();
        }
    }
}
