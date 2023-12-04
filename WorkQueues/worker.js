/* 
* this file will listen to queue and do the work
*/

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://rabbit-1', function (error0, connection) {
  if (error0) {
    throw error0
  }

  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1
    }

    let queue = 'task_queue'

    channel.assertQueue(queue, {
      durable: true
    })

    channel.prefetch(1) // This tells RabbitMQ not to give more than one message to a worker at a time

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue)

    channel.consume(queue, function (msg) {
      let secs = msg.content.toString().split('.').length - 1

      console.log(" [x] Received %s", msg.content.toString())

      setTimeout(function() {
        console.log(" [x] Done")
        channel.ack(msg)
      }, secs * 1000)

    }, {
      noAck: false
    })
    
  })
})