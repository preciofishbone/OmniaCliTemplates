using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Omnia.Fx.HostConfiguration.Extensions;
using System;

namespace $namespace$
{
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                BuildWebHost(args)
                .RunOmnia();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public static IWebHost BuildWebHost(string[] args) => 
            WebHost
                .CreateDefaultBuilder(args)
                .UseOmniaWebAppConfiguration<Startup>((omniaConfig) =>
                {
                    omniaConfig
                    .AddAppSettingsJsonFile("appsettings.local.json")
                    .AddOmniaFxWebApp();
                })
                .ConfigureLogging((cfgLogging) =>
                {
                    cfgLogging.UseOmniaLogging();
                })
                .Build();
    }
}
