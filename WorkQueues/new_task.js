var amqp = require('amqplib/callback_api');

// create a connection
// amqp.connect("amqp://" + rabbit_user + ":" +rabbit_password + "@" + rabbit_host + ":" + rabbit_port +"/")
amqp.connect('amqp://rabbit-1', function(error0, connection) {
  if (error0) {
    throw error0
  }
  console.log('connected to the hole..')
  // create a channel
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1
    }
    console.log('channel created...')

    let queue = 'task_queue', msg = process.argv.slice(2).join(' ') || 'Hello World!'

    // create a queue
    channel.assertQueue(queue, {
      durable: true
    })

    // publish a message to the queue
    channel.sendToQueue(queue, Buffer.from(msg), {
      persistent: true
    })

    console.log(" [x] Sent %s", msg)
  });

  // close connection
  setTimeout(function() {
    connection.close();
    process.exit(0)
    }, 500);
});