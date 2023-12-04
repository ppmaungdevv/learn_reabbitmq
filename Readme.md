# Node app with Rabbitmq

#### Rabbitmq Learning Project

## Download & Installation

```
docker run -d -it --rm --net rabbitmq_net --hostname rabbit-1 --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management
```

## Install rabbitmq package for node

```
npm install amqplib
```

## HelloWorld

run the following command in docker console

```
node send.js
```

```
node receive.js
```

tuto link

- https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html

## Work Queues

In this one we'll create a Work Queue that will be used to distribute time-consuming tasks among multiple workers.

Using message acknowledgments, `noAck: false` and `channel.ack(msg)` in `channel.consume` in worker, and prefetch, `channel.prefetch(1)` after `channel.assertQueue` in worker, you can set up a work queue. The durability options, `durable: true` in `channel.assertQueue` in both worker and task, let the tasks survive even if RabbitMQ is restarted.

run the following command in docker console

```
node new_task.js 1 message.............
```

```
node worker.js
```

tuto link

- https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html

## Notes

To use dashboard, go to `http://localhost:15672/` and use `guest` as credentials to login

## Useful links

### Rabbitmq tutorials

- https://www.rabbitmq.com/getstarted.html

### Useful Reference links

Note some tutos might not be in JS but the logic is all we need to learn

- https://www.youtube.com/watch?v=hfUIWe1tK8E
