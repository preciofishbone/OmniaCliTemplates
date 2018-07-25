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

namespace Omnia.Workers.App
{
    internal class QueueBusExampleWorker : LifetimeEventsHostedService
    {
        public ILogger<QueueBusExampleWorker> Logger { get; }
        public IMessageBus MessageBus { get; }
        public IQueueBus QueueBus { get; }

        public QueueBusExampleWorker(
            IApplicationLifetime appLifetime,
            ILogger<QueueBusExampleWorker> logger,
            IMessageBus messageBus,
            IQueueBus queueBus
            ) : base(appLifetime)
        {
            Logger = logger;
            MessageBus = messageBus;
            QueueBus = queueBus;
        }

        bool run = true;

        public override async Task OnStarted()
        {
            Logger.LogInformation("OnStarted");

            var topic = new Topic<Pelle>("TestTopic", "Test");
            var topic2 = new Topic<Pelle>("Another", "Place");

            var queue = new Omnia.Fx.Models.Queues.Queue<Pelle>("MySpecialQueue");

            var subToken1 = MessageBus
                .Subscribe(topic, (val) =>
                {
                    Console.WriteLine($"Listener 1: {val.TheVaule}");
                });

            var subToken2 = MessageBus
                .Subscribe(topic, (val) =>
                {
                    Console.WriteLine($"Listener 2: {val.TheVaule}");
                });

            MessageBus
                .Subscribe(topic2, (val) =>
                {
                    Console.WriteLine($"Listener 3: {val.TheVaule}");
                });

            QueueBus
                .Dequeue(queue, (val) =>
                {

                    Console.WriteLine($"Handling Queue: Val is {val.TheVaule}");
                    Thread.Sleep(5000);
                    throw new Exception("I crashed");
                });


            while (run)
            {
                Console.Write(":>");
                var mess = Console.ReadLine();

                await MessageBus
                        .PublishAsync(topic, new Pelle { TheVaule = mess });

                await MessageBus
                        .PublishAsync(topic2, new Pelle { TheVaule = $"I append to mess:{mess}" });

                var t = await QueueBus
                         .EnqueueAsync(queue, new Pelle { TheVaule = mess });

                MessageBus
                    .Unsubscribe(subToken2);

                Task.Run(async () =>
                {
                    var run = true;
                    while (run)
                    {
                        var progress = await QueueBus.GetProgress(t);

                        if (progress.FinishedAt > default(DateTimeOffset))
                        {
                            run = false;
                            Console.WriteLine("Finished Job");
                        }

                        if (progress.Status == Fx.Models.Queues.QueueMessageStatus.Exception)
                        {
                            Console.WriteLine($"Got exception with value {progress.Exception.Message}");
                        }

                        Thread.Sleep(2000);

                        Console.WriteLine("Checking if queue is finished");
                    }
                });

            }



        }

        public override async Task OnStopped()
        {
            Logger.LogInformation("OnStopped");
        }

        public override async Task OnStopping()
        {
            Logger.LogInformation("OnStopping");
            run = false;
        }


    }

    public class Pelle
    {
        public string TheVaule { get; set; }
    }
}
