using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Omnia.Fx.Messaging;
using Omnia.Fx.Models.Messaging;
using Omnia.Fx.NetCore.Messaging;
using Omnia.Fx.NetCore.Queues;
using Omnia.Fx.NetCore.Worker;
using Omnia.Fx.Queues;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace $namespace$
{
    internal class ExampleWorker : LifetimeEventsHostedService
    {
        public ILogger<ExampleWorker> Logger { get; }
        
        public ExampleWorker(
            IApplicationLifetime appLifetime,
            ILogger<ExampleWorker> logger
            ) : base(appLifetime)
        {
            Logger = logger;
        }

        public override Task OnStarted()
        {
            Logger.LogInformation("OnStarted");
            return Task.CompletedTask;
        }

        public override Task OnStopped()
        {
            Logger.LogInformation("OnStopped");
            return Task.CompletedTask;
        }

        public override Task OnStopping()
        {
            Logger.LogInformation("OnStopping");
            return Task.CompletedTask;
        }

    }
}
